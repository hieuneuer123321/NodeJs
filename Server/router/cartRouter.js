const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const cartController = require("../controllers/cartController");

router.get("/add-cart", urlencodedParser, cartController.getCart);
router.post("/add-cart", urlencodedParser, cartController.postCart);

module.exports = router;
