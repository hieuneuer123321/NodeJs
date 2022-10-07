const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, data) => {
      console.log("read" + data);
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err, data) => {
        console.log("Lỗi:" + err);
      });
    });
  }
  static fetchAip(callback) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, "utf8", (err, data) => {
      if (err) {
        callback([]);
      } else {
        callback(JSON.parse(data));
      }
    });
    // if (dataPro.length > 0) {
    //   return [];
    // } else {
    //   return JSON.parse(dataPro);
    // }
    // console.log(dataPro);
  }
};
