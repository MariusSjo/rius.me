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
                <div className="enhet">
                    <div id="namecolumn">Name</div>
                    <div id="pricecolumn">Price</div>
                    <div id="picturecolumn">Picture</div>
                    <Enhet />
                </div>
            </div>
        );
    }
}

export default vinmonopolet;
