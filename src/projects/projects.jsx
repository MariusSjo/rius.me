import React, { Component } from 'react';
import './project.css';
import bilde from '../graphics/portrett.jpeg';

export default class projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liste1: ['Grafisk', 'Rius.me', 'Vinduslukker', 'Vinmonopolet'],
        };
    }

    render() {
        return (
            <div id="projects">
                {this.state.liste1.map((tema) => {
                    return (
                        <div>
                            <div id="image">
                                <img class="projectImg" src={bilde}></img>
                            </div>
                            <p>
                                <h2>{tema}</h2>
                                <hr />
                                I'm baby helvetica hammock kogi health goth
                                taiyaki leggings hella la croix air plant
                                freegan celiac sriracha adaptogen master
                                cleanse. Kale chips godard tattooed meggings.
                                Beard schlitz distillery, celiac shabby chic
                                sriracha photo booth authentic cardigan
                                typewriter.
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }
}
