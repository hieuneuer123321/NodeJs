// const fs = require("fs");
// const path = require("path");
// const db = require("../tool/database");
// module.exports = class Product {
//   constructor(title, imageUrl, price, description) {
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.price = price;
//     this.description = description;
//   }
//   save() {
//     // this.id = Math.floor(Math.random() * 1000) + 1;
//     // const p = path.join(
//     //   path.dirname(require.main.filename),
//     //   "data",
//     //   "products.json"
//     // );
//     // fs.readFile(p, (err, data) => {
//     //   console.log("read" + data);
//     //   let products = [];
//     //   if (!err) {
//     //     products = JSON.parse(data);
//     //   }
//     //   products.push(this);
//     //   fs.writeFile(p, JSON.stringify(products), (err, data) => {
//     //     console.log("Lỗi:" + err);
//     //   });
//     // });
//     return db.execute(
//       "Insert into products(title,description,price,imageUrl) values (?,?,?,?)",
//       [this.title, this.description, this.price, this.imageUrl]
//     );
//   }
//   static findById(id) {
//     // const p = path.join(
//     //   path.dirname(require.main.filename),
//     //   "data",
//     //   "products.json"
//     // );
//     // fs.readFile(p, "utf8", (err, data) => {
//     //   if (err) {
//     //     callback({});
//     //   } else {
//     //     const products = JSON.parse(data);
//     //     const product = products.find((product) => {
//     //       return product.id == id;
//     //     });
//     //     callback(product);
//     //   }
//     // });
//     //Lúc này có thể hiểu là NodeJS sẽ tự sinh ra một câu query và điền vào dấu “?” các giá trị tương ứng truyền vào ở tham số thứ 2.
//     return db.execute("SELECT * FROM products WHERE products.id = ?", [id]);
//   }
//   // static fetchAip(callback) {
//   // const p = path.join(
//   //   path.dirname(require.main.filename),
//   //   "data",
//   //   "products.json"
//   // );
//   // fs.readFile(p, "utf8", (err, data) => {
//   //   if (err) {
//   //     callback([]);
//   //   } else {
//   //     callback(JSON.parse(data));
//   //   }
//   // });
//   // }
//   static fetchAip() {
//     return db.execute("SELECT * FROM products;");
//   }
// };
const Sequelize = require("sequelize");

const sequelize = require("../tool/database");

const Product = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
