import React, { Component } from 'react';
import './project.css';
import polet from '../graphics/polet.png';
import rius from '../graphics/logo3.0.png';
import photoshop from '../graphics/photoshop.png';
import vindu from '../graphics/vindu.png';
import { NavLink } from 'react-router-dom';

export default class projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    tittel: 'Grafisk',
                    innhold:
                        'Jeg har lenge vært interessert i redigering og bildemanipulasjon. Det hele startet med enkel manipulering, til faceswapping til nå å lage min egen vektorgrafikk.',
                    bilde: photoshop,
                    link: '',
                },
                {
                    tittel: 'Rius.me',
                    innhold:
                        'For en stund tilbake så bestemte jeg meg for å lage denne siden. Denne har jeg laget på eget initativ på fritiden min. Mye for å få vist hva jeg kan, samtidig som at det er ganske gøy. (Kanskje mest av alt; det at folk klager over at det ikke er noe på rius.me domentet.)',
                    bilde: rius,
                    link: '',
                },
                {
                    tittel: 'Vinduslukker',
                    innhold:
                        'Du vet den følelsen når du legger deg om kvelden på vinteren og det er godt og kalt på rommet. også blir man trø.... Og nå så våkner man i et kaldt rom med vinduet oppe!? Jeg har den perfekte løsningen for deg!.',
                    bilde: vindu,
                    link: '',
                },
                {
                    tittel: '',
                    innhold:
                        'Er du også en av dem som har hatt en hard studietid der man har smakt så å si all øl som Rema1000 har å tilby, men det er litt dyrt å gå for polvarene? Ved hjelp av vinomopolets API har jeg funnet løsningen! så hva venter du på? Trykk på tittelen da vel!',
                    bilde: polet,
                    link: 'Vinmonopolet',
                },
            ],
        };
    }

    render() {
        return (
            <div id="projects">
                {this.state.projects.map((project) => {
                    return (
                        <div>
                            <div id="image">
                                <img
                                    class="projectImg"
                                    src={project.bilde}
                                ></img>
                            </div>
                            <p>
                                <h2>
                                    <NavLink
                                        activeClassName="active"
                                        to="/polet"
                                    >
                                        {project.link}
                                    </NavLink>
                                    {project.tittel}
                                </h2>
                                <hr />
                                {project.innhold}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }
}
