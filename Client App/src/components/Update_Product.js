import React, { Component } from "react";
export default class Add_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    console.log(this.props.id);
  }
  componentDidMount() {
    ((aip) => {
      return fetch(aip)
        .then((repon) => {
          return repon.json();
        })
        .then((data) => {
          this.setState({ product: data });
          console.log(this.state.product);
        });
    })("http://localhost:5000/update-product/" + this.props.id + "?edit=true");
  }
  render() {
    return (
      <div>
        <form
          class="product-form"
          action="http://localhost:5000/update-product"
          method="post"
        >
          <input
            type="hidden"
            name="productId"
            id="productId"
            value={this.state.product.id}
          ></input>
          <div class="form-control">
            <label for="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={this.state.product.title}
            ></input>
          </div>
          <div class="form-control">
            <label for="image">Image Url</label>
            <input
              type="text"
              name="image"
              id="image"
              defaultValue={this.state.product.imageUrl}
            ></input>
          </div>
          <div class="form-control">
            <label for="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              defaultValue={this.state.product.price}
            ></input>
          </div>
          <div className="form-control">
            <label for="description">Description</label>
            <textarea
              className="w100"
              name="description"
              id="description"
              defaultValue={this.state.product.description}
            ></textarea>
          </div>
          <button class="btn" type="submit">
            Update Product
          </button>
        </form>
      </div>
    );
  }
}
