import React, { Component } from 'react';
import riusLogo from '../graphics/logo2.0.png';
import './header.css';

export default class header extends Component {
    render() {
        return (
            <div>
                <div id="logoposition">
                    {/*     <video with="100">
                        <source
                            src="../graphics/Network.webm"
                            type="video/webm"
                        />
                        dette funket ikke
                    </video> */}
                    <img id="riusLogo" src={riusLogo} alt="riusLogo" />
                </div>
            </div>
        );
    }
}
