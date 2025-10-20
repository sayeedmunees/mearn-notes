const fs = require("fs");

fs.unlink("./sample.txt", (err) => {
  if (err) throw err;
  console.log("File deleted");
});
