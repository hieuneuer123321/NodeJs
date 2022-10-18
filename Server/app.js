const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const rtMovies = require("./router/rtMovies");
const rtTrailerMovies = require("./router/rtTrailerMovies");
const rtSearchMovies = require("./router/rtSearchMovies");
//
const UserToken = require("./models/tokenUser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// combo nhận giá trị trong input khi gửi req lên
// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// lấy giá trị trong ô input dùng req.body
// app.use("/", urlencodedParser, (req, res, next) => {
//   res.send("<h1>Test</h1>");
// });
app.use(cors());

app.use("/:token", urlencodedParser, (req, res, next) => {
  const token = req.params.token;
  if (!token) {
    res.status(401).send("Unauthorized");
  } else {
    UserToken.getToken(token, (user) => {
      if (user) {
        next();
      } else {
        res.status(401).send("Unauthorized");
      }
    });
  }
});
app.use("/:token/api/movies/video", urlencodedParser, rtTrailerMovies);
app.use("/:token/api/movies/search", urlencodedParser, rtSearchMovies);
app.use("/:token/api/movies", urlencodedParser, rtMovies);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(5000);
