const Product = require("../models/products");

exports.getProduct = function (req, res, next) {
  // res.send("<h1>Test add</h1>");
  //   res.send(products);
  // console.log("Product");
  // res.send(Product.fetchAip());
  Product.fetchAip((product) => {
    res.send(product);
  });
};
exports.postProduct = function (req, res, next) {
  // res.send(users);
  //   console.log(req.body);
  //   users.push(req.body.products);
  //   res.redirect("http://localhost:3000/");
  // console.log(req.body);
  const products = new Product(
    req.body.title,
    req.body.image,
    req.body.price,
    req.body.description
  );
  console.log(products);
  products.save();
  res.redirect("http://localhost:3000/");
};
