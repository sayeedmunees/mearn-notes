const fs = require("fs");

fs.rename("./text.txt", "./sample.txt", (err) => {
  if (err) throw err;
  console.log("File renamed");
});
