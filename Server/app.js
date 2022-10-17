const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const rtMovies = require("./router/rtMovies");
const rtTrailerMovies = require("./router/rtTrailerMovies");
const rtSearchMovies = require("./router/rtSearchMovies");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
// combo nhận giá trị trong input khi gửi req lên
// const bodyParser = require("body-parser");
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// lấy giá trị trong ô input dùng req.body
// app.use("/", urlencodedParser, (req, res, next) => {
//   res.send("<h1>Test</h1>");
// });
app.use(cors());

app.use("/api/movies/video", urlencodedParser, rtTrailerMovies);
app.use("/api/movies/search", urlencodedParser, rtSearchMovies);
app.use("/api/movies", urlencodedParser, rtMovies);

// app.use("/", urlencodedParser, (req, res, next) => {
//   res.send("<h1>Test</h1>");
// });

app.listen(5000);
