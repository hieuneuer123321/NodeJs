const express = require("express");
const routes = express.Router();
const moviesController = require("../controllers/moviesController");

routes.post("/:keyword/:page", moviesController.searchMovies);
routes.post("/:keyword", moviesController.searchMovies);
routes.post("/", moviesController.searchMovies);

module.exports = routes;
