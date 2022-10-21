const express = require("express");
const routes = express.Router();
const moviesController = require("../controllers/moviesController");
// const pathRt = [
//   "/:keyword/:genre/:mediaType/:language/:year/:page",
//   "/:keyword/:genre/:mediaType/:language/:year/",
//   "/:keyword/:genre/:mediaType/:language//:page",
//   "/:keyword/:genre/:mediaType//:year/:page",
//   "/:keyword/:genre//:language/:year/:page",
//   "/:keyword//:mediaType/:language/:year/:page",
//   "/:keyword/:genre/:mediaType///:page",
//   "/:keyword///:language/:year/:page",
//   "/:keyword/:genre///:year/:page",
//   "/:keyword/:genre//:language//:page",
// ];
routes.post(
  "/:keyword/:genre/:mediaType/:language/:year/:page",
  moviesController.searchMoviesAdvanced
);
// (:param)? : có thể có hoặc không
routes.post(
  "/:keyword/(:genre)?/(:mediaType)?/(:language)?/(:year)?",
  moviesController.searchMoviesAdvanced
);

routes.post("/:keyword/:page", moviesController.searchMovies);
routes.post("/:keyword", moviesController.searchMovies);
routes.post("/", moviesController.searchMovies);

module.exports = routes;
