import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class Add_User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aipUser: [],
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <div>
          <ul>
            <NavLink to="/">
              <li>Enter User</li>
            </NavLink>
            <NavLink to="/user">
              <li>Users</li>
            </NavLink>
          </ul>
        </div>
        <div>
          <form action="http://localhost:5000/add-user" method="post">
            <input type="text" name="user"></input>
            <button type="submit">Add User</button>
          </form>
        </div>
      </div>
    );
  }
}
