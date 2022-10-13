const express = require("express");
const routes = express.Router();
const moviesController = require("../controllers/moviesController");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
routes.get("/", urlencodedParser, moviesController.getAllMovies);
routes.get("/:page", urlencodedParser, moviesController.getPageMovies);

module.exports = routes;
