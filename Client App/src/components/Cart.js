import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    // let productById;
    // for (const i of this.props.cartProduct.products) {
    //   productById = this.props.products.filter((product) => {
    //     return product.id == i.id;
    //   });
    // }
    this.state = {
      productInCart: [],
    };
  }
  render() {
    let productById;
    if (
      this.props.cartProduct.products
        ? this.props.cartProduct.products.length > 0
        : false
    ) {
      // dung map de tao mang moi chi chua id, include để ktra id có trong arr chua id da loc k
      productById = this.props.products.filter((product) => {
        return this.props.cartProduct.products
          .map((p) => p.id)
          .includes(`${+product.id}`);
      });
      // this.setState({ productInCart: productById });
      const productHtml = productById.map((product) => {
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
              <form action="http://localhost:5000/add-cart" method="post">
                <input
                  type="hidden"
                  name="productId"
                  id="productId"
                  value={product.id}
                ></input>
                <button class="btn" type="submit">
                  Add to Cart
                </button>
              </form>
            </div>
          </article>
        );
      });
      return <div class="grid">{productHtml}</div>;
      // return <h1>Product !</h1>;
    } else {
      return <h1>No Product</h1>;
    }
  }
}
