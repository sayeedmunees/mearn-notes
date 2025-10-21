// import express library

const express = require("express");

// Create server
const bookStoreServer = express();

// Create port
PORT = 4000 || process.env.PORT;

bookStoreServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
