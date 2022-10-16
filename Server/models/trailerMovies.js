const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "videoList.json"
);
// const filterVideo = (official, site, type) => {
//   if (official == true && site == "Youtube") {
//     if (type == "Trailer" || type == "Teaser") {
//       return true;
//     }
//     return false;
//   } else return false;
// };
module.exports = class VideoTrailer {
  static postTrailerMovies(id, callback) {
    fs.readFile(p, (err, data) => {
      if (err) {
        callback(null);
      } else {
        const videoList = JSON.parse(data);
        const video = videoList.find((vid) => vid.id == id);
        if (!video) {
          return callback({});
        } else {
          const videoFilter1 = video.videos.filter(
            (vid) =>
              vid.official == true &&
              vid.site.toLowerCase() == "youtube" &&
              (vid.type.toLowerCase() == "trailer" ||
                vid.type.toLowerCase() == "teaser")
          );
          if (videoFilter1.length <= 0) {
            return callback({});
          } else {
            videoFilter1.sort((a, b) => {
              const dateA = new Date(a.published_at);
              // chuyển  string thành date
              const dateB = new Date(b.published_at);
              return parseInt((dateB - dateA) / (1000 * 60 * 60 * 24));
              //one_day means 1000*60*60*24
              //one_hour means 1000*60*60
              //one_minute means 1000*60
              //one_second means 1000
            });
            const responseVideoTrailer = videoFilter1.find((video) => {
              return video.type.toLowerCase() == "trailer";
            });
            if (responseVideoTrailer) {
              callback(responseVideoTrailer);
            } else {
              const responseVideoTeaser = videoFilter1.find((video) => {
                return video.type.toLowerCase() == "teaser";
              });
              callback(responseVideoTeaser);
            }
          }
        }
      }
    });
  }
};
