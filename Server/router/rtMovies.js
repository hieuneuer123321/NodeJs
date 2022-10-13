const express = require("express");
const routes = express.Router();
const moviesController = require("../controllers/moviesController");
// const bodyParser = require("body-parser");

// const urlencodedParser = bodyParser.urlencoded({ extended: false });
routes.get("/trending", moviesController.getPageMoviesTrending);
routes.get("/trending/:page", moviesController.getPageMoviesTrending);

module.exports = routes;
