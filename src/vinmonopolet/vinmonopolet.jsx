import React, { Component } from "react";
import Enhet from "../enhet/enhet.jsx";

export class vinmonopolet extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Polet kommer her</h1>
                <h2>
                    <Enhet />
                </h2>
            </div>
        );
    }
}

export default vinmonopolet;
