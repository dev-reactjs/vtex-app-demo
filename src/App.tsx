import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Solutions from "./screen/Solutions";
import Home from "./screen/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Solutions" component={Solutions} />
        </Switch>
      </Router>
    );
  }
}

export default App;