import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const style = { display: "inline-block" };
    function renderProducts(productList) {
      if (productList.length <= 0) {
        return <h1>No Products Found !</h1>;
      } else {
        console.log(productList);
        const productHtml = productList.map((product) => {
          console.log(product);
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
                {/* <form
                  style={style}
                  action="http://localhost:5000/update-product"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="productId"
                    id="productId"
                    value={product.id}
                  ></input>
                  <button class="btn btn-primary" type="submit">
                    Edit
                  </button>
                </form> */}
                <Link to={"update-product/" + product._id} class="btn">
                  Edit
                </Link>
                <form
                  style={style}
                  action="http://localhost:5000/delete-product"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="productId"
                    id="productId"
                    value={product.id}
                  ></input>

                  <button class="btn btn-primary" type="submit">
                    Delete
                  </button>
                </form>
              </div>
            </article>
          );
        });
        return <div class="grid">{productHtml}</div>;
      }
    }
    return <div>{renderProducts(this.props.products)}</div>;
  }
}
