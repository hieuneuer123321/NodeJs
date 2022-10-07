import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [1],
    };
  }
  componentDidMount() {
    const aip = (aip) => {
      return fetch(aip)
        .then((repon) => {
          return repon.json();
        })
        .then((data) => {
          this.setState({ products: data });
        });
    };
    aip("http://localhost:5000/add-product");
  }
  render() {
    function renderUser(productList) {
      if (productList.length <= 0) {
        return <h1>No Products Found !</h1>;
      } else {
        const productHtml = productList.map((product) => {
          return (
            <article class="card product-item">
              <header class="card__header">
                <h1 class="product__title">{product.title}</h1>
              </header>
              <div class="card__image">
                <img src={product.imageUrl} alt="A Book"></img>
              </div>
              <div class="card__content">
                <h2 class="product__price">${product.price} </h2>
                <p class="product__description">{product.description}</p>
              </div>
              <div class="card__actions">
                <button class="btn">Add to Cart</button>
              </div>
            </article>
          );
        });
        return <div class="grid">{productHtml}</div>;
      }
    }
    return <div>{renderUser(this.state.products)}</div>;
  }
}
