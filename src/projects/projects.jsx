import React, { Component } from 'react';
import './project.css';
import polet from '../graphics/polet.png';
import rius from '../graphics/logo3.0.png';
import ansikt from '../graphics/face.png';
import photoshop from '../graphics/photoshop.png';
import vindu from '../graphics/vindu.png';
import { NavLink } from 'react-router-dom';

export default function projects() {
	let projects = [
		{
			tittel: '',
			innhold:
				'Er du også en av dem som har hatt en hard studietid der man har smakt så å si all øl som Rema1000 har å tilby, men det er litt dyrt å gå for polvarene? Ved hjelp av vinomopolets API har jeg funnet løsningen! så hva venter du på? Trykk på tittelen da vel!',
			bilde: polet,
			link: 'Vinmonopolet',
			key: 1,
		},
		{
			tittel: '',
			innhold:
				'Jeg synes kunstig intligens er utrolig fasinerende. På denne siden kan du bruke ditt egent webcam på å finne ut blant annet ditt eget humør. Her har jeg benyttet meg av et allerede eksisterende API.',
			bilde: ansikt,
			link: 'Ansiktsgjenkjenning',
			key: 2,
		},
		{
			tittel: 'Grafisk',
			innhold:
				'Jeg har lenge vært interessert i redigering og bildemanipulasjon. Det hele startet med enkel manipulering, til faceswapping til nå å lage min egen vektorgrafikk.',
			bilde: photoshop,
			link: '',
			key: 3,
		},
		{
			tittel: 'Rius.me',
			innhold:
				'For en stund tilbake så bestemte jeg meg for å lage denne siden. Denne har jeg laget på eget initativ på fritiden min. Mye for å få vist hva jeg kan, samtidig som at det er ganske gøy. (Kanskje mest av alt; det at folk klager over at det ikke er noe på rius.me domentet.)',
			bilde: rius,
			link: '',
			key: 4,
		},
		{
			tittel: 'Vinduslukker',
			innhold:
				'Du vet den følelsen når du legger deg om kvelden på vinteren og det er godt og kalt på rommet. også blir man trø.... Og nå så våkner man i et kaldt rom med vinduet oppe!? Jeg har den perfekte løsningen for deg!.',
			bilde: vindu,
			link: '',
			key: 5,
		},
	];

	return (
		<div id='projects'>
			{projects.map((project) => {
				return (
					<div key={project.key}>
						<div id='image'>
							<img
								className='projectImg'
								src={project.bilde}
								alt={project.tittel}></img>
						</div>
						<h2>
							<NavLink activeClassName='active' to={project.link}>
								{project.link}
							</NavLink>
							{project.tittel}
						</h2>
						<hr />
						<p>{project.innhold}</p>
					</div>
				);
			})}
		</div>
	);
}
