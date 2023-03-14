const Cart = require("../models/cart");
const Product = require("../models/products");

exports.getCart = function (req, res, next) {
  // Cart.fetchAip((productInCart) => {
  //   res.send(productInCart);
  // });
  // console.log("te " + typeof Cart.fetchAip);
  // res.send("<h1>test cart</h1>");
  // req.user
  //   .getCart()
  //   .then((cart) => {
  //     return cart
  //       .getProducts()
  //       .then((products) => {
  //         res.send(products);
  //       })
  //       .catch((err) => console.log(err));
  //   })
  //   .catch((err) => console.log(err));
  req.user
    .GetCart()
    .then((products) => {
      console.log(products);
      res.send(products);
    })
    .catch((err) => console.log(err));
};
exports.postCart = function (req, res, next) {
  const productId = req.body.productId;
  // Product.findById(productId, (product) => {
  //   Cart.addProduct(productId, product.price);
  // });
  ////////////////////////////////
  // Product.findById(productId)
  //   .then((product) => {
  //     if (product[0]) {
  //       Cart.addProduct(productId, product[0].price);
  //     }
  //   })
  //   .catch((err) => {});
  // res.redirect("http://localhost:3000/Cart");
  //////////////////
  // Product.findByPk(productId).then((product) => {
  //   Cart.addProduct(productId, product.price);
  // });
  //////////////////
  Product.findById(productId)
    .then((product) => {
      return req.user.AddToCart(product);
    })
    .then((result) => {
      console.log(result);
    });
  res.redirect("http://localhost:3000/Cart");
};
