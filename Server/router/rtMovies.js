const express = require("express");
const routes = express.Router();
const moviesController = require("../controllers/moviesController");
// const bodyParser = require("body-parser");

// const urlencodedParser = bodyParser.urlencoded({ extended: false });
routes.get("/trending", moviesController.getPageMoviesTrending);
routes.get("/trending/:page", moviesController.getPageMoviesTrending);
// Lấy các phim có Rating cao
routes.get("/top-rate", moviesController.getTopRate);
routes.get("/top-rate/:page", moviesController.getTopRate);
// discover
routes.get("/discover/", moviesController.getDiscover);
routes.get("/discover/:genre/", moviesController.getDiscover);
routes.get("/discover/:genre/:page", moviesController.getDiscover);

module.exports = routes;
