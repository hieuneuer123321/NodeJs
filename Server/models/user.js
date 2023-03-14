const getDb = require("../tool/database").getDb;
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;
class User {
  constructor(name, email, cart, id) {
    this.name = name;
    this.email = email;
    this.cart = cart; //{items:[]}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db.collection("Users").insertOne(this);
  }
  AddToCart(product) {
    console.log(product._id.toString());
    const cartProductIndex = this.cart.items.findIndex((pro) => {
      return pro.productId.toString() == product._id.toString();
    });
    console.log(cartProductIndex);
    let newquantity = 1;
    const updateCartItem = [...this.cart.items];
    if (cartProductIndex >= 0) {
      newquantity = this.cart.items[cartProductIndex].quantity + 1;
      updateCartItem[cartProductIndex].quantity = newquantity;
    } else {
      updateCartItem.push({
        productId: new ObjectId(product._id),
        quantity: newquantity,
      });
    }
    const updateCart = {
      items: updateCartItem,
    };
    console.log(updateCart);
    const db = getDb();
    return db
      .collection("Users")
      .updateOne(
        { _id: new ObjectId(this._id) },
        { $set: { cart: updateCart } }
      );
  }
  static FindById(UserId) {
    const db = getDb();
    return db
      .collection("Users")
      .findOne({ _id: ObjectId(UserId) })
      .then((user) => {
        console.log(user);

        return user;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  GetCart() {
    const db = getDb();
    const productIds = this.cart.items.map((item) => item.productId);
    return db
      .collection("Products")
      .find({ _id: { $in: productIds } })
      .toArray()
      .then((products) =>
        products.map((product) => {
          return {
            ...product,
            quantity: this.cart.items.find(
              (i) => i.productId.toString() === product._id.toString()
            ).quantity,
          };
        })
      );
  }
}
module.exports = User;
