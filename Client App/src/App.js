import React, { Component } from "react";
import "./App.css";
import AddUser from "./components/Add_User";
import Users from "./components/Users";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={AddUser} />
            <Route path="/user" component={Users} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
