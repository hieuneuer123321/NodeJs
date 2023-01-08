const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const controller_Products = require("../controllers/product");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/add-product", urlencodedParser, controller_Products.getProduct);
router.post("/add-product", urlencodedParser, controller_Products.postProduct);
router.post(
  "/delete-product",
  urlencodedParser,
  controller_Products.deleteProduct
);
router.get(
  "/update-product/:productId",
  urlencodedParser,
  controller_Products.getUpdateProduct
);
router.post(
  "/update-product",
  urlencodedParser,
  controller_Products.postUpdateProduct
);
exports.router = router;
