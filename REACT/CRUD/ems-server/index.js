require("dotenv").config();
const cors = require("cors");
const express = require("express");
const routes = require("./routes/routes");

const server = express();

server.use(cors);
server.use(express.json());
server.use(routes);

const PORT = 3000;

server.listen(PORT, () => {
  console.log("Server Started");
});
