import React, { Component } from 'react';
import './home.css';
import ferie from '../graphics/ferie.png';
import paaTur from '../graphics/paaTur.jpg';
import portrett from '../graphics/skitur.jpg';

export class home extends Component {
	render() {
		return (
			<div id='home'>
				<div class='col-md-7'>
					<div>
						<h2 class='featurette-heading'>
							Fyttigrisen så heldig jeg er...{' '}
						</h2>
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
					<div>
						<h2 className='featurette-heading'>
							Så hyggelig at du tok turen!{' '}
						</h2>
						<p>
							Jeg er veldig glad i å "koble av" med en liten tur!
							Så du finner meg fort der dekningen ikke strekker
							til også. Om du har en stravabruker må du ikke kvie
							deg for å ta kontakt.
						</p>
					</div>
					<img src={portrett} alt='Portrett' />
				</div>

				<div class='col-md-7'>
					<div>
						<h2 className='featurette-heading'>
							Sjekk gjerne ut prosjektene mine!{' '}
						</h2>
						<p class='lead'>
							Siden du har tatt deg tid til å lese så langt, så
							anbefaler jeg deg hvertfall å ta en titt på
							prosjektene mine! Tar gjerne imot litt input også.
							Ha en finfin dag videre.
						</p>
					</div>
					<div class=''>
						<img src={paaTur} alt='Portrett' id='portrett' />
					</div>
				</div>
			</div>
		);
	}
}

export default home;
