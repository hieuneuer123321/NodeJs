const express = require("express");
const RtAddProduct = require("./router/Add_product");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const rtMovies = require("./router/rtMovies");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// combo nhận giá trị trong input khi gửi req lên
// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// lấy giá trị trong ô input dùng req.body
// app.use("/", urlencodedParser, (req, res, next) => {
//   res.send("<h1>Test</h1>");
// });
app.use(cors());
// app.use("/api/movies/", RtAddProduct.router);
app.use("/api/movies", urlencodedParser, rtMovies);
// app.use("/", urlencodedParser, (req, res, next) => {
//   res.send("<h1>Test</h1>");
// });

app.listen(5000);
