const express = require("express");
const RtAddUser = require("./router/Add_User");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// combo nhận giá trị trong input khi gửi req lên
// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// lấy giá trị trong ô input dùng req.body
app.use(cors());
app.use(RtAddUser.router);
app.use("/", urlencodedParser, (req, res, next) => {
  res.send("<h1>Test</h1>");
});
app.listen(5000);
