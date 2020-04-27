import React, { Component } from 'react';
import './about.css';
import visittkort from '../graphics/visittkort.jpg';

export default class about extends Component {
    render() {
        return (
            <div>
                <div id="about">
                    <img
                        src={visittkort}
                        id="visittkort"
                        alt="visittkort"
                    ></img>
                </div>
            </div>
        );
    }
}
