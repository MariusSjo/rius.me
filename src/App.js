import React from 'react';
import './App.css';
import About from './about/about.jsx';
import Header from './header/header.jsx';
import Home from './home/home.jsx';
import Projects from './projects/projects.jsx';
import Vinmonopolet from './vinmonopolet/vinmonopolet.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <ul class="navbar">
                    <div>
                        <li>
                            <NavLink activeClassName="active" to="/ ">
                                Hjem
                            </NavLink>
                        </li>
                        <li id="divider"> | </li>
                        <li>
                            <NavLink
                                activeClassName="active"
                                to="/projects"
                                id="projects"
                            >
                                Prosjekter
                            </NavLink>
                        </li>
                    </div>
                    <li>
                        <NavLink activeClassName="active" to="/contact">
                            Kontakt
                        </NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/contact">
                        <About />
                    </Route>
                    <Route path="/polet">
                        <Vinmonopolet />
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
