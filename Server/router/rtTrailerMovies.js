const express = require("express");
const routes = express.Router();
const trailerMovies = require("../controllers/trailerMoviesController");

routes.post("/:id", trailerMovies.postTrailerMovies);

module.exports = routes;