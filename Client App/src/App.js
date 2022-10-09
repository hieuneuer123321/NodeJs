import React, { Component } from "react";
import "./App.css";
import AddProduct from "./components/Add_Product";
import Products from "./components/Product";
import Cart from "./components/Cart";
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
    this.state = {
      products: [],
      cart: [],
    };
  }
  componentDidMount() {
    ((aip) => {
      return fetch(aip)
        .then((repon) => {
          return repon.json();
        })
        .then((data) => {
          this.setState({ products: data });
        });
    })("http://localhost:5000/add-product");
    ((aip) => {
      return fetch(aip)
        .then((repon) => {
          return repon.json();
        })
        .then((data) => {
          console.log(data);
          this.setState({ cart: data });
        });
    })("http://localhost:5000/add-cart");
  }
  render() {
    console.log(this.state.cart);
    // const ProductWithId = ({ match }) => {
    //   if (this.state.products.length > 0) {
    //     return <Cart product={[]} />;
    //   } else {
    //     return (
    //       <Cart
    //         idProduct={parseInt(match.params.productId, 10)}
    //         cartProduct={this.state.cart.length > 0 ? this.state.cart : []}
    //       />
    //     );
    //   }
    // };
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
                  <NavLink class="" to="/Cart">
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
              <Route
                path="/Cart"
                component={() => (
                  <Cart
                    cartProduct={
                      this.state.cart.length <= 0 ? {} : this.state.cart
                    }
                    products={
                      this.state.products.length > 0 ? this.state.products : []
                    }
                  />
                )}
              />
              <Route
                exact
                path="/"
                component={() => (
                  <Products
                    products={
                      this.state.products.length > 0 ? this.state.products : []
                    }
                  />
                )}
              />
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
