const http = require("http");

http
  .createServer((req, res) => {
    res.write("reqest received");
    res.end;
  })
  .listen(4000, () => {
    console.log("Server running succesfully");
  });
