import React from 'react';
import './App.css';
import About from './about/about.jsx';
import Header from './header/header.jsx';
import Content from './content/content.jsx';
import Home from './home/home.jsx';
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
                                Home
                            </NavLink>
                        </li>
                        <li id="divider"> | </li>
                        <li>
                            <NavLink
                                activeClassName="active"
                                to="/projects"
                                id="projects"
                            >
                                Projects
                            </NavLink>
                        </li>
                    </div>
                    <li>
                        <NavLink activeClassName="active" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/projects">
                        <Header />
                        {/*                         <div>
                            <Content />
                        </div> */}
                    </Route>
                    <Route path="/contact">
                        <Header />
                        {/*                         <About /> */}
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
