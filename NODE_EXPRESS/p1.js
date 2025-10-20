const fs = require("fs");

fs.writeFile("./text.txt", "First Node Program", (err) => {
  if (err) throw err;
  console.log("Data written");
});

fs.readFile("./text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
