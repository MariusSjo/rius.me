import React, { useEffect, useState } from 'react';
import './vinmonopolet.css';
import searchIcon from '../graphics/search_icon.png';
function Vinmonopolet() {
	const [list, setList] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [alternative, setAlternative] = useState(0);
	const alternatives = [
		{ name: 'Alle', value: 0, checked: 'checked' },
		{ name: 'Øl', value: 5, checked: '' },
		{ name: 'Vin', value: 1, checked: '' },
		{ name: 'Brennevin', value: 3, checked: '' },
	];

	useEffect(handleChange, [searchText]);

	function handleChange() {
		if (searchText.length > 0) {
			fetch(
				'https://rius.herokuapp.com/beverages/search/' +
					searchText.replace(' ', '_'),
			)
				.then((results) => {
					return results.json();
				})
				.then((data) => {
					setList(data);
				})
				.catch((err) => {
					console.error('error:', err);
				});
		} else {
			setList([]);
		}
	}
	return (
		<div>
			<div id='searchAlco'>
				<img src={searchIcon} id='searchIcon' alt='SearchIcon' />
				<input
					id='searchBar'
					type='text'
					placeholder='Søk etter polvarer her!'
					onChange={(e) =>
						e.target.value.length === 0
							? setSearchText('NULL')
							: setSearchText(e.target.value)
					}
				/>
				<p id='APK_info'>
					*APK: Alkohol per krone. Dette er en måleenhet som forklarer
					hvor mye alkohol man får for pengene. For å gi et perspektiv
					til forholdstallet så vil en 6-pack med øl på 4,7% til kr
					200 ha 0,0705 APK.
				</p>
				<div id='alternatives'>
					<select onChange={(e) => setAlternative(e.target.value)}>
						{alternatives.map((alt) => {
							return (
								<option key={alt.value} value={alt.value}>
									{alt.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div id='Poloversikt'>
				<h3>Resultater:</h3>
				{list.map((drink) => {
					if (
						drink.percent > 0 &&
						(drink.classification === alternative ||
							alternative < 1)
					) {
						return (
							<div className='enheter' key={drink.productId}>
								<div key={drink.name}>
									<h4>{drink.name}</h4>
								</div>
								<img
									className='picture'
									alt={drink.longName}
									src={
										'https://bilder.vinmonopolet.no/cache/200x200-0/' +
										drink.productId +
										'-1.jpg'
									}
								/>
								<div>
									Pris: {drink.prices}kr
									<br />
									Prosent: {drink.percent}% <br />
									Volum: {drink.volume} <br />
									APK:{' '}
									{(
										(drink.volume * drink.percent) /
										drink.prices
									).toFixed(4)}
									<br />
									<a
										className='drinkLink'
										href={
											'https://www.vinmonopolet.no/Land/' +
											drink.country +
											'/' +
											drink.longName.replace(' ', '-') +
											'/p/' +
											drink.productId
										}
										target='_blank'
										rel='noopener noreferrer'>
										Link
									</a>
								</div>
							</div>
						);
					} else return null;
				})}
			</div>
		</div>
	);
}

export default Vinmonopolet;
