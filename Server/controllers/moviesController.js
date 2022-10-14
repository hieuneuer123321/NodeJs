const Movies = require("../models/movies");

// exports.getAllMovies = (req, res, next) => {
//   Movies.getPageMoviesTrend(null, (movi) => {
//     res.send(movi);
//   });
// };
exports.getPageMoviesTrending = (req, res, next) => {
  const page = req.params.page ? req.params.page : 1;
  Movies.getPageMoviesTrend(page, (movi) => {
    res.send(movi);
  });
};
exports.getTopRate = (req, res, next) => {
  const page = req.params.page ? req.params.page : 1;
  Movies.getPageMoviesTopRate(page, (movi) => {
    res.send(movi);
  });
};
