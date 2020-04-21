import React, { Component } from 'react';
import './home.css';
import portrett from '../graphics/portrett.jpg';
import sporty from '../graphics/sporty.jpeg';
import paaTur from '../graphics/paaTur.jpg';

export class home extends Component {
    render() {
        return (
            <div id="home">
                <div id="section">
                    <img src={portrett} alt="Portrett" id="portrett" />
                    <h2>Hei!</h2>
                    <p>
                        Jeg er Marius Sjøberg, en student som studerer
                        informatikk ved NTNU i Trondeim. Og som du kanskje har
                        skjønt; en stolt eier av rius.me domenet.
                    </p>
                </div>
                <div id="section">
                    <img src={sporty} alt="Portrett" id="sporty" />
                    <p>
                        Jeg er utrolig glad i å løpe! Så det er ganske enkel
                        logikk for om jeg løper eller ikke!
                        <br /> (VondtIKneet) ? LiggerPaaSofaen : erPaaLopetur
                    </p>
                </div>
                <div id="section">
                    <img src={paaTur} alt="Portrett" id="paaTur" />
                    <p>
                        Jeg er veldig glad i å "koble av" med en liten tur! Så
                        du finner meg fort der dekningen ikke strekker til også.
                    </p>
                </div>
            </div>
        );
    }
}

export default home;
