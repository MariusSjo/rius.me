import React from "react";
import "./App.css";
import About from "./about/about.jsx";
import Header from "./header/header.jsx";
import Home from "./home/home.jsx";
import Projects from "./projects/projects.jsx";
import Vinmonopolet from "./vinmonopolet/vinmonopolet.jsx";
import FaceDetection from "./faceDetection/faceDetection.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { App as InsightsApp, parameters } from "insights-js";
const insights = new InsightsApp("xRLyesI3SZs1x2rl");
// will show up in project 2's dashboard
insights.track({
  id: "read-post",
  parameters: {
    // this will track the locale of the user, useful to know if we should translate our posts
    locale: parameters.locale(),
    // this will track the type of screen on which the user reads the post, useful for useability
    screenSize: parameters.screenType(),
  },
});

insights.track({
  id: "open-page",
  parameters: {
    path: parameters.path(),
    screenType: parameters.screenType(),
    referrer: parameters.referrer(),
  },
});

function App() {
  return (
    <div>
      <Router>
        <ul className="navbar">
          <div>
            <li>
              <NavLink to="/ " exact activeClassName="active">
                hjem
              </NavLink>
            </li>
            <li id="divider"> | </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                to="/projects"
                id="projects"
              >
                prosjekter
              </NavLink>
            </li>
          </div>

          <li>
            <NavLink activeClassName="active" to="/contact">
              kontakt
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
          <Route path="/Vinmonopolet">
            <Vinmonopolet />
          </Route>
          <Route path="/Ansiktsgjenkjenning">
            <FaceDetection />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route component={Header} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
