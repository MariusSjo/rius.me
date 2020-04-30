import React, { Component } from 'react';
import riusLogo from '../graphics/nyfont.png';
import './header.css';
import Bubbles from '../graphics/animation/bubbles.jsx';

export default class header extends Component {
    render() {
        return (
            <div>
                <div id="logoposition">
                    <img id="riusLogo" src={riusLogo} alt="riusLogo" />
                    <Bubbles />
                </div>
            </div>
        );
    }
}
