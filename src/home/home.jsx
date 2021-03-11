import React, { Component } from 'react';
import './home.css';
import ferie from '../graphics/ferie.png';
import glad from '../graphics/glad.jpg';
import portrett from '../graphics/skitur.jpg';
import { BrowserRouter as NavLink } from 'react-router-dom';

export class home extends Component {
	render() {
		return (
			<div id='home'>
				<div className='col-md-7'>
					<div className='text-home'>
						<h2>Fyttigrisen så heldig jeg er... </h2>
						<p>
							som fikk deg på besøk! Jeg er Marius Sjøberg, en
							student som studerer informatikk ved NTNU i
							Trondheim. Og som du kanskje har skjønt; en stolt
							eier av rius.me domenet.
						</p>
					</div>
					<img src={ferie} alt='Portrett' />
				</div>

				<div className='col-md-7 invertedColumn'>
					<div className='text-home'>
						<h2>Dette er nok langtifra din nye hjemmeside!</h2>
						<p>
							Men du skal ikke se bortifra at du finner
							funksjonalitet som du vil få bruk for en dag.
							(Hvertfall hvis du vil spare litt penger:{' '}
							<NavLink to='/vinmonopolet'> vinmonopolet</NavLink>)
						</p>
					</div>
					<img src={portrett} alt='Portrett' />
				</div>

				<div className='col-md-7'>
					<div className='text-home'>
						<h2>Sjekk gjerne ut prosjektene mine! </h2>
						<p>
							Siden du har tatt deg tid til å lese så langt, så
							anbefaler jeg deg hvertfall å ta en titt på
							prosjektene mine! Tar gjerne imot litt input også.
							Ha en finfin dag videre.
						</p>
					</div>
					<div>
						<img src={glad} alt='Portrett' id='portrett' />
					</div>
				</div>
			</div>
		);
	}
}

export default home;
