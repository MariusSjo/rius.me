import React, { useEffect, useState } from 'react';
import './vinmonopolet.css';
import searchIcon from '../graphics/search_icon.png';
function Vinmonopolet() {
	const [list, setList] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [alternative, setAlternative] = useState(0);
	const [order, setOrder] = useState('APK');
	const [acs, setAcs] = useState('-1');
	const [available, setAvailable] = useState('0');
	const alternatives = [
		{ name: 'Alle', value: 0 },
		{ name: 'Øl', value: 5 },
		{ name: 'Vin', value: 1 },
		{ name: 'Brennevin', value: 3 },
	];
	const sortAlternatives = [
		{ name: 'APK', value: 'APK' },
		{ name: 'Pris', value: 'prices' },
		{ name: 'Volum', value: 'volume' },
		{ name: 'Prosent', value: 'percent' },
	];

	useEffect(handleChange, [searchText, alternative, acs, available, order]);
	/* 	/beverages/search/fre/orderBy/APK/-1/filter/0/isAvailable/1*/
	function handleChange() {
		if (searchText.length > 0) {
			fetch(
				'https://rius.herokuapp.com/beverages/search/' +
					searchText.replace(' ', '_') +
					'/orderBy/' +
					order +
					'/' +
					acs +
					'/filter/' +
					alternative +
					'/isAvailable/' +
					available,
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
			handleEmpty();
		}
	}

	/*     http://localhost:5001/beverages/orderBy/APK/-1/filter/0/isAvailable/1 HTTP/1.1 */

	function handleEmpty() {
		fetch(
			'https://rius.herokuapp.com/beverages/' +
				'orderBy/' +
				order +
				'/' +
				acs +
				'/filter/' +
				alternative +
				'/isAvailable/' +
				available,
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
							? handleEmpty()
							: setSearchText(e.target.value)
					}
				/>
				<p id='APK_info'>
					*APK: Alkohol per krone. Dette er en måleenhet som forklarer
					hvor mye alkohol man får for pengene. For å gi et perspektiv
					til forholdstallet så vil en 6-pack med øl på 4,7% til kr
					200 ha 7,05 APK.
				</p>
				<p>
					<b>Filtrering og søk</b>
				</p>
				<hr />
				<div>
					<div id='filters'>
						<p>Type:</p>
						<select
							name='filtervalue'
							className='filter'
							onChange={(e) => setAlternative(e.target.value)}>
							{alternatives.map((alt) => {
								return (
									<option value={alt.value}>
										{alt.name}
									</option>
								);
							})}
						</select>
					</div>
					<div id='filters'>
						<p>Sortering:</p>
						<select
							name='filtervalue'
							className='filter'
							onChange={(e) => setOrder(e.target.value)}>
							{sortAlternatives.map((alt) => {
								return (
									<option value={alt.value}>
										{alt.name}
									</option>
								);
							})}
						</select>
					</div>
					<div id='filters'>
						<p>Rekkefølge:</p>
						<select
							name='filtervalue'
							className='filter'
							onChange={(e) => setAcs(e.target.value)}>
							<option value='-1'>Synkende</option>
							<option value='1'>Stigende</option>
						</select>
					</div>
					<div id='filters'>
						<p>Tilgjengelig:</p>
						<select
							name='filtervalue'
							className='filter'
							onChange={(e) => setAvailable(e.target.value)}>
							<option value='0'>Alle resultater</option>
							<option value='1'>Kun tilgjengelige</option>
						</select>
					</div>
				</div>
			</div>
			<div id='Poloversikt'>
				<h3>Resultater:</h3>
				{list.map((drink) => {
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
								APK: {(Number(drink.APK) * 100).toFixed(2)}
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
				})}
			</div>
		</div>
	);
}

export default Vinmonopolet;
