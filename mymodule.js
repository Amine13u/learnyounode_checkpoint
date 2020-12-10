const fs = require("fs");
const path = require("path");

module.exports = function (dirName, extStr, callbackFunction) {
  fs.readdir(dirName, function (err, list) {
    if (err) {
      return callbackFunction(err);
    }
    callbackFunction(
      null,
      list.filter(function (file) {
        return path.extname(file) === "." + extStr;
      })
    );
  });
};
