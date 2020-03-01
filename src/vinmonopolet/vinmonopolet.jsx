import React, { Component } from "react";
import Enhet from "../enhet/enhet.jsx";

export class vinmonopolet extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchText: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    id="searchBar"
                    type="text"
                    id="searchBar"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <Enhet test={this.state.searchText} />
            </div>
        );
    }
}

export default vinmonopolet;
