import React from "react";
import "./App.css";
import About from "./about/about.jsx";
import Header from "./header/header.jsx";
import Content from "./content/content.jsx";
import Home from "./home/home.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <div>
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
                        <div id="test">
                            <Content />
                        </div>
                    </Route>
                    <Route path="/about">
                        <Header />
                        <About />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
