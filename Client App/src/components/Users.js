import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const aip = (aip) => {
      return fetch(aip)
        .then((repon) => {
          return repon.json();
        })
        .then((data) => {
          this.setState({ users: data });
        });
    };
    aip("http://localhost:5000/add-user");
  }
  render() {
    function renderUser(userList) {
      if (userList.length <= 0) {
        return <h1>No Users Found !</h1>;
      } else {
        const userLi = userList.map((user) => {
          return <li>{user}</li>;
        });
        return <ul>{userLi}</ul>;
      }
    }
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
        <h3>Users List</h3>
        {renderUser(this.state.users)}
      </div>
    );
  }
}
