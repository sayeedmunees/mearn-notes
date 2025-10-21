// import express library
const express = require("express");
// import cors
const cors = require("cors");
// import route
const route = require("./routes.js");

// Create server
const bookStoreServer = express();

// server using cors
bookStoreServer.use(cors());
bookStoreServer.use(express.json()); //parse json middleware
bookStoreServer.use(route);

// Create port
PORT = 4000 || process.env.PORT;

bookStoreServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
