const Cart = require("../models/cart");
const Product = require("../models/products");

exports.getCart = function (req, res, next) {
  Cart.fetchAip((productInCart) => {
    res.send(productInCart);
  });
  // console.log("te " + typeof Cart.fetchAip);
  // res.send("<h1>test cart</h1>");
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
  Product.findByPk(productId).then((product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect("http://localhost:3000/Cart");
};
