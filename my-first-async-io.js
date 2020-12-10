const fs = require("fs");

fs.readFile(process.argv[2], function (err, file) {
  if (err) {
    return console.log(err);
  }
  let newLinesNumber = file.toString().split("\n").length - 1;
  console.log(newLinesNumber);
});
