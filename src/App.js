import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
