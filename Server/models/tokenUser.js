const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "userToken.json"
);
module.exports = class TokenUser {
  static getToken(token, callback) {
    fs.readFile(p, (err, data) => {
      if (err) {
        return null;
      } else {
        const userTokenList = JSON.parse(data);
        const userToken = userTokenList.find((user) => {
          return user.token == token;
        });
        if (userToken) {
          callback(userToken);
        } else {
          callback(null);
        }
      }
    });
  }
};
