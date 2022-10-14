const Movies = require("../models/movies");

// exports.getAllMovies = (req, res, next) => {
//   Movies.getPageMoviesTrend(null, (movi) => {
//     res.send(movi);
//   });
// };
exports.getPageMoviesTrending = (req, res, next) => {
  const page = req.params.page ? req.params.page : 1;
  Movies.getPageMoviesTrend(page, (movie) => {
    res.send(movie);
  });
};
exports.getTopRate = (req, res, next) => {
  const page = req.params.page ? req.params.page : 1;
  Movies.getPageMoviesTopRate(page, (movie) => {
    res.send(movie);
  });
};
exports.getDiscover = (req, res, next) => {
  const page = req.params.page ? req.params.page : 1;
  const genre = req.params.genre;
  if (!genre) {
    res.status(400).send("Not found gerne parram");
  } else {
    Movies.getPageMoviesDiscover(genre, page, (movie) => {
      if (movie.genre_name == "") {
        res.status(400).send("Not found that gerne id");
      } else {
        res.send(movie);
      }
    });
  }
};
