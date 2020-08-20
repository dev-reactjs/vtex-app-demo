import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Solutions from "./screen/Solutions";
import Home from "./screen/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Solutions} />
        </Switch>
      </Router>
    );
  }
}

export default App;