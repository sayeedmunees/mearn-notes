// import mongoose
const mongoose = require("mongoose");

connectionString = process.env.DATABASE;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(`MongoDB Connection failed, due to ${err}`);
  });
