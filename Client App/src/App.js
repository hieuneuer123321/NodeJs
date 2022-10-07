import React, { Component } from "react";
import "./App.css";
import AddProduct from "./components/Add_Product";
import Products from "./components/Product";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header class="main-header">
            <nav class="main-header__nav">
              <ul class="main-header__item-list">
                <li class="main-header__item">
                  <NavLink class="active" to="/">
                    Shop
                  </NavLink>
                </li>
                <li class="main-header__item">
                  <NavLink class="" to="/">
                    Product
                  </NavLink>
                </li>
                <li class="main-header__item">
                  <NavLink class="" to="/">
                    Cart
                  </NavLink>
                </li>
                <li class="main-header__item">
                  <NavLink class="" to="/">
                    Orders
                  </NavLink>
                </li>
                <li class="main-header__item">
                  <NavLink class="" to="/add-product">
                    Add Product
                  </NavLink>
                </li>
                <li class="main-header__item">
                  <NavLink class="" to="/">
                    Admin Product
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/add-product" component={AddProduct} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
