import React, { Component } from "react";
import Enhet from "../enhet/enhet.jsx";

export class vinmonopolet extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input type="text" onChange="searchDrink"></input>
                <Enhet />
            </div>
        );
    }
}

export default vinmonopolet;
