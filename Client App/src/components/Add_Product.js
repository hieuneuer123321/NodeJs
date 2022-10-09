import React, { Component } from "react";
export default class Add_Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form
          class="product-form"
          action="http://localhost:5000/add-product"
          method="post"
        >
          <div class="form-control">
            <label for="title">Title</label>
            <input type="text" name="title" id="title"></input>
          </div>
          <div class="form-control">
            <label for="image">Image Url</label>
            <input type="text" name="image" id="image"></input>
          </div>
          <div class="form-control">
            <label for="price">Price</label>
            <input type="text" name="price" id="price"></input>
          </div>
          <div className="form-control">
            <label for="description">Description</label>
            <textarea
              className="w100"
              name="description"
              id="description"
            ></textarea>
          </div>
          <button class="btn" type="submit">
            Add Product
          </button>
        </form>
      </div>
    );
  }
}
