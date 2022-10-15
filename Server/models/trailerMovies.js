const fs = require("fs");
const path = require("path");
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "videoList.json"
);

module.exports = class VideoTrailer {
  static postTrailerMovies(id, callback) {
    fs.readFile(p, (err, data) => {
      if (err) {
        callback(null);
      } else {
        const videoList = JSON.parse(data);
        const video = videoList.find((vid) => vid.id == id);
        if (!video) {
          return callback([]);
        } else {
          const videoFilter = video.videos.filter((vid) => {
            return vid.official == true && vid.site == "Youtube";
          });
          console.log(videoFilter);

          callback(videoFilter);
        }
      }
    });
  }
};
