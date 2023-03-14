const Product = require("../models/products");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
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
  Product.FetchAll()
    .then((products) => {
      console.log(products);
      res.send(products);
    })
    .catch((error) => {
      console.error(error);
    });
};
exports.getUpdateProduct = function (req, res, next) {
  const editMode = req.query.edit;

  // const productId = req.body.productId;
  if (!editMode) {
    res.redirect("http://localhost:3000/admin-product");
  } else {
    const productId = req.params.productId;

    Product.findById(productId)
      // Product.findById(prodId)
      .then((product) => {
        if (!product) {
          return res.redirect("http://localhost:3000/admin-product");
        } else {
          res.send(product);
        }
      })
      .catch((err) => console.log(err));
  }
};
exports.postUpdateProduct = function (req, res, next) {
  const productId = req.body.productId;
  console.log(req.body);
  if (!productId) {
    res.redirect("http://localhost:3000/admin-product");
  } else {
    const product = new Product(
      req.body.title,
      req.body.image,
      req.body.price,
      req.body.description,
      new ObjectId(productId)
    );
    product
      .save()
      .then((result) => {
        console.log("UPDATED PRODUCT!");
        res.redirect("http://localhost:3000/admin-product");
      })
      .catch((err) => console.log(err));
  }
};
// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   const updatedTitle = req.body.title;
//   const updatedPrice = req.body.price;
//   const updatedImageUrl = req.body.imageUrl;
//   const updatedDesc = req.body.description;

//   const product = new Product(
//     updatedTitle,
//     updatedPrice,
//     updatedDesc,
//     updatedImageUrl,
//     new ObjectId(prodId)
//   );
//   product
//     .save()
//     .then((result) => {
//       console.log("UPDATED PRODUCT!");
//       res.redirect("/admin/products");
//     })
//     .catch((err) => console.log(err));
// };

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
  console.log(req.user);
  const product = new Product(
    title,
    imageUrl,
    price,
    description,
    null,
    req.user._id
  );
  product
    .save()
    .then((result) => {
      // console.log(result);
      console.log("Created Product");
    })
    .catch((err) => {
      console.log(err);
    });
  // Product.create({
  //   title: title,
  //   price: price,
  //   imageUrl: imageUrl,
  //   description: description,
  // })
  //   .then((result) => {
  //     // console.log(result);
  //     console.log("Created Product");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  res.redirect("http://localhost:3000/");
};

exports.deleteProduct = function (req, res, next) {
  const productId = req.body.productId;
  // const title = req.body.title;
  // const imageUrl = req.body.image;
  // const price = req.body.price;
  // const description = req.body.description;
  console.log(productId);
  Product.deleteById(productId)
    .then(() => {
      console.log("DESTROYED PRODUCT");
      res.redirect("http://localhost:3000/admin-product");
    })
    .catch((err) => console.log(err));
};
