import React, { Component } from 'react';
import './bubbles.css';

export default class header extends Component {
    render() {
        return (
            <div>
                <div className="animation-area">
                    <ul className="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        );
    }
}
