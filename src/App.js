import React from "react";
import "./App.css";
import Header from "./header/header.jsx";
import Content from "./content/content.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <div id="body">
            <Router>
                <ul id="menu">
                    <li>
                        <Link to="/">
                            <Button variant="info">Home</Button>{" "}
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/pol">
                            <Button variant="info">Polet</Button>{" "}
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <Link to="/about">
                            <Button variant="info">About</Button>{" "}
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/pol">
                        <Content />
                    </Route>
                    <Route path="/">
                        <Header />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
