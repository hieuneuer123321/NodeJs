const Product = require("../models/products");

exports.getProduct = function (req, res, next) {
  // res.send("<h1>Test add</h1>");
  //   res.send(products);
  // console.log("Product");
  // res.send(Product.fetchAip());
  // console.log(typeof Product.fetchAip);
  // Product.fetchAip((product) => {
  //   res.send(product);
  // });
  //////////////////
  // Product.fetchAip()
  //   .then((products) => {
  //     if (products[0].length > 0) {
  //       for (const product of products) {
  //         res.send(product);
  //       }
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  ////////////////////////////////
  Product.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch((error) => {
      console.error(error);
    });
};
exports.postProduct = function (req, res, next) {
  // res.send(users);
  //   console.log(req.body);
  //   users.push(req.body.products);
  //   res.redirect("http://localhost:3000/");
  // console.log(req.body);
  ////////////////////////////////
  // const products = new Product(
  //   req.body.title,
  //   req.body.image,
  //   req.body.price,
  //   req.body.description
  // );
  // products.save();
  // res.redirect("http://localhost:3000/");
  ////////////////////////////////
  const title = req.body.title;
  const imageUrl = req.body.image;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
  })
    .then((result) => {
      // console.log(result);
      console.log("Created Product");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("http://localhost:3000/");
};
exports.deleteProduct = function (req, res, next) {
  const productId = req.body.productId;
  // const title = req.body.title;
  // const imageUrl = req.body.image;
  // const price = req.body.price;
  // const description = req.body.description;
  Product.findByPk(productId)
    .then((product) => {
      return product.destroy();
    })
    .then((result) => console.log("Delete Product"))
    .catch((err) => {
      console.log(err);
    });
  res.redirect("http://localhost:3000/admin-product");
};
exports.getUpdateProduct = function (req, res, next) {
  const editMode = req.query.edit;
  // const productId = req.body.productId;

  if (!editMode) {
    res.redirect("http://localhost:3000/admin-product");
  } else {
    const productId = req.params.productId;
    console.log(productId);
    Product.findByPk(productId)
      .then((product) => {
        res.send(product);
      })
      .then((result) => {
        console.log("Get Product By Id");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
exports.postUpdateProduct = function (req, res, next) {
  const productId = req.body.productId;
  console.log(productId);
  if (!productId) {
    res.redirect("http://localhost:3000/admin-product");
  } else {
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.image;
    const updatedPrice = req.body.price;
    const updatedDesc = req.body.description;
    Product.findByPk(productId)
      .then((product) => {
        product.title = updatedTitle;
        product.price = updatedPrice;
        product.description = updatedDesc;
        product.imageUrl = updatedImageUrl;
        return product.save();
      })
      .then((result) => {
        console.log("UPDATED PRODUCT!");
        res.redirect("http://localhost:3000/admin-product");
      })
      .catch((err) => console.log(err));
  }
};
