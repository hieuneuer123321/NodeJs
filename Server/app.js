const express = require("express");
const RtAddProduct = require("./router/Add_product");
const RtCart = require("./router/cartRouter");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// combo nhận giá trị trong input khi gửi req lên
// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// lấy giá trị trong ô input dùng req.body
// app.use("/", urlencodedParser, (req, res, next) => {
//   res.send("<h1>Test</h1>");
// });
///connect database mysql
// const db = require("./tool/database");
// const errorController = require("./controllers/error");
const mongoConnect = require("./tool/database").mongoConnect;
// const MongoClient = require("mongodb").MongoClient;
// MongoClient.connect("mongodb://localhost:27017", (err, client) => {
//   if (err) {
//     return console.error(err);
//   } else {
//     return "Conent";
//   }
// });
/////
app.use(cors());
app.use(RtAddProduct.router);
app.use(RtCart);
app.use("/", urlencodedParser, (req, res, next) => {
  res.send("<h1>Test</h1>");
});
mongoConnect((client) => {
  app.listen(5000);
});
// app.listen(5000, () => {
//   console.log("Listening");
// });
