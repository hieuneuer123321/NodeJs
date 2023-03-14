const fs = require("fs");
const path = require("path");
// const db = require("../tool/database");
const mongodb = require("mongodb");
const getDb = require("../tool/database").getDb;

module.exports = class Product {
  constructor(title, imageUrl, price, description, id, userId) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection("Products")
        .updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: this });
    } else {
      dbOp = db.collection("Products").insertOne(this);
    }
    return dbOp
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  }
  static FetchAll() {
    const db = getDb();
    return db
      .collection("Products")
      .find()
      .toArray()
      .then((products) => {
        return products;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static findById(prodId) {
    const db = getDb();
    return db
      .collection("Products")
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then((product) => {
        return product;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static deleteById(prodId) {
    const db = getDb();
    return db
      .collection("Products")
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then((result) => {
        console.log("Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

// module.exports = Product;
