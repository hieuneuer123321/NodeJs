const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const users = [];
router.get("/add-user", function (req, res, next) {
  //   res.send("<h1>Test add</h1>");
  res.send(users);
});
router.post("/add-user", urlencodedParser, function (req, res, next) {
  // res.send(users);
  console.log(req.body);
  users.push(req.body.user);
  res.redirect("http://localhost:3000/user");
});
exports.router = router;
exports.users = users;
