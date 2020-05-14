import React, { Component } from 'react';
import './project.css';
import polet from '../graphics/polet.png';
import rius from '../graphics/logo3.0.png';
import photoshop from '../graphics/photoshop.png';
import vindu from '../graphics/vindu.png';

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
                },
                {
                    tittel: 'Rius.me',
                    innhold:
                        'For en stund tilbake så bestemte jeg meg for å lage denne siden. Denne har jeg laget på eget initativ på fritiden min. Mye for å få vist hva jeg kan, samtidig som at det er ganske gøy. (Kanskje mest av alt; det at folk klager over at det ikke er noe på rius.me domentet.)',
                    bilde: rius,
                },
                {
                    tittel: 'Vinduslukker',
                    innhold:
                        'Du vet den følelsen når du legger deg om kvelden på vinteren og det er godt og kalt på rommet. også blir man trø.... Og nå så våkner man i et kaldt rom med vinduet oppe!? Jeg har den perfekte løsningen for deg!.',
                    bilde: vindu,
                },
                {
                    tittel: 'Vinmonopolet',
                    innhold:
                        'Er du også en av dem som har hatt en hard studietid der man har smagt så å si all øl som rema1000 har å tilby, men det er litt dyrt å gå for polvarene? Ved hjelp av vinomopolets API er jeg i ferd med å finne løsningen! Så hold ut enn så lenge!',
                    bilde: polet,
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
                                <h2>{project.tittel}</h2>
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
