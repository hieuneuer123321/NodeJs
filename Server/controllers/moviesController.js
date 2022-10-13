const Movies = require("../models/movies");

exports.getAllMovies = (req, res, next) => {
  Movies.getPageMovies(null, (movi) => {
    res.send(movi);
  });
};
exports.getPageMovies = (req, res, next) => {
  const page = req.params.page ? req.params.page : 1;
  Movies.getPageMovies(page, (movi) => {
    res.send(movi);
  });
};
