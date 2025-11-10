// import dotenv config
require("dotenv").config();

// import express library
const express = require("express");
// import cors
const cors = require("cors");
// import route
const route = require("./routes.js");
// import db connection files
require("./databaseConnection.js");

// Create server
const bookStoreServer = express();

// server using cors
bookStoreServer.use(cors());
bookStoreServer.use(express.json()); //parse json middleware
bookStoreServer.use(route);

// export the uploads folder from the server side
bookStoreServer.use('/upload', express.static("./uploads"))

// Create port
PORT = 4000 || process.env.PORT;

bookStoreServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

bookStoreServer.get("/", (req, res) => {
  res.status(200).send(`<h1>Server Started!!</h1>`);
});
