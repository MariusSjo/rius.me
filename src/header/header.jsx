import React, { Component } from "react";
import logo from "../logo.svg";
import riusLogo from "../graphics/logo.png";
import "./header.css";

export default class header extends Component {
    render() {
        return (
            <div id="header">
                <div id="menubar">some menu elements</div>
                <div id="logoposition">
                    <img id="dot" src={logo} alt="logo" />
                    <img id="riusLogo" src={riusLogo} alt="riusLogo" />
                </div>
            </div>
        );
    }
}
