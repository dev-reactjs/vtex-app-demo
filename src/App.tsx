import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Solutions from "./screen/Solutions";
import Home from "./screen/Home";
import Users from "./screen/Users";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/solutions" component={Solutions} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    );
  }
}

export default App;