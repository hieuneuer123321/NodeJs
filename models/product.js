const fs = require("fs");
const path = require("path");
const Cart = require("../models/cart");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      if (this.id) {
        // nếu có id thì sửa k thì thêm
        const existingProductId = products.findIndex(
          (product) => product.id === this.id
        );
        // console.log(existingProductId);
        const updatedProduct = [...products];
        updatedProduct[existingProductId] = this;
        fs.writeFile(p, JSON.stringify(updatedProduct), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
  static deleteProduct(id, callback) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      const UpdateProduct = products.filter((prod) => prod.id !== id);
      if (UpdateProduct.length > 0) {
        callback(UpdateProduct);
      } else {
        callback(products);
      }

      fs.writeFile(p, JSON.stringify(UpdateProduct), (err) => {
        console.log("Lỗi : " + err);
        if (!err) {
          Cart.deleteProduct(id, product.price);
        }
      });
    });
  }
};
