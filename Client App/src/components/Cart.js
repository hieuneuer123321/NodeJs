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
  desQuantity(sl) {
    alert(sl);
  }
  addQuantity(sl) {
    alert(sl);
  }
  render() {
    console.log(this.props.cartProduct);

    if (this.props.cartProduct ? this.props.cartProduct.length > 0 : false) {
      // dung map de tao mang moi chi chua id, include để ktra id có trong arr chua id da loc k
      // productById = this.props.products.filter((product) => {
      //   return this.props.cartProduct.products
      //     .map((p) => p._id)
      //     .includes(`${+product._id}`);
      // });
      // this.setState({ productInCart: productById });
      console.log(this.props.cartProduct);
      const productHtml = this.props.cartProduct.map((product) => {
        return (
          <div class="layout-inline row">
            <div class="col col-pro layout-inline">
              <img className="imgCart" src={product.imageUrl} alt="kitten" />
              <p>{product.title}</p>
            </div>

            <div class="col col-price col-numeric align-center ">
              <p>${product.price}</p>
            </div>

            <div class="col col-qty layout-inline">
              <a
                onClick={() => this.desQuantity(product.quantity)}
                class="qty qty-minus"
              >
                -
              </a>
              <input type="numeric" value={product.quantity} />
              <a
                onClick={() => this.addQuantity(product.quantity)}
                class="qty qty-plus"
              >
                +
              </a>
            </div>

            <div class="col col-vat col-numeric">
              <p>{product.description}</p>
            </div>
            <div class="col col-total col-numeric">
              {" "}
              <p> </p>
            </div>
          </div>
        );
      });
      return (
        <div class="container">
          <div class="heading">
            <h1>
              <span class="shopper">s</span> Shopping Cart
            </h1>
          </div>
          <div class="cart transition is-open">
            <a class="btn btn-update">Update cart</a>
            <div class="table">
              <div class="layout-inline row th">
                <div class="col col-pro">Product</div>
                <div class="col col-price align-center ">Price</div>
                <div class="col col-qty align-center">QTY</div>
                <div class="col">DES</div>
                <div class="col">Total</div>
              </div>
              {productHtml}
              <div class="tf">
                <div class="row layout-inline">
                  <div class="col">
                    <p>VAT</p>
                  </div>
                  <div class="col"></div>
                </div>
                <div class="row layout-inline">
                  <div class="col">
                    <p>Shipping</p>
                  </div>
                  <div class="col"></div>
                </div>
                <div class="row layout-inline">
                  <div class="col">
                    <p>Total</p>
                  </div>
                  <div class="col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      // return <h1>Product !</h1>;
    } else {
      return <h1>No Product</h1>;
    }
  }
}
