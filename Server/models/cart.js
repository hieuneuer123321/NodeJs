const path = require("path");
const fs = require("fs");
module.exports = class Cart {
  // constructor() {
  //   this.products = [];
  //   this.totalPrice = 0;
  // }
  static addProduct(id, productPrice) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "cart.json"
    );
    fs.readFile(p, "utf8", function (err, data) {
      let cart = { products: [], totalPrice: 0 };
      // nếu k lỗi => có dữ liệu trong file .json thì gán dữ liệu đọc đc cho cart
      if (data) {
        cart = JSON.parse(data);
      }
      // ktra sản phẩm có tồn tại trong giỏ chưa nếu có tăng sl thêm 1 k thì thêm sp đó vào
      const existProductId = cart.products.findIndex((p) => p.id == id);
      const existProduct = cart.products[existProductId];
      let updateProduct;
      if (existProduct) {
        // tạo 1 sản phẩm mới có thông tin của sản phẩm có id = id truyền vào
        updateProduct = { ...existProduct };
        // tăng sl lên 1
        updateProduct.qty = updateProduct.qty + 1;
        cart.products = [...cart.products];
        // ghi đè lại sản phẩm đã update sl vào
        cart.products[existProductId] = updateProduct;
      } else {
        updateProduct = { id: id, qty: 1 }; // tạo 1 sản phẩm mới để thêm vào giỏ
        cart.products = [...cart.products, updateProduct];
      }
      // cập nhật tổng giá tiền giỏ hàng
      cart.totalPrice = cart.totalPrice + +productPrice;
      // ghi vào file .json
      fs.writeFile(p, JSON.stringify(cart), (err, data) => {
        console.log(err);
      });
    });
  }
  static fetchAip(callback) {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "cart.json"
    );
    fs.readFile(p, "utf8", (err, data) => {
      if (!data) {
        callback({ product: [], totalPrice: 0 });
      } else {
        callback(data);
      }
    });
  }
};
