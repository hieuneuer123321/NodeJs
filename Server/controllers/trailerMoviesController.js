const TrailerMovies = require("../models/trailerMovies");

exports.postTrailerMovies = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send("Not found film_id parram");
  }
  TrailerMovies.postTrailerMovies(id, (movie) => {
    if (!movie) {
      res.status(404).send("Not found video");
    } else {
      res.send(movie);
    }
  });
};
