const mongoose = require("mongoose");
const connectionString = process.env.DBSTRING;
mongoose
  .connect(connectionString)
  .then((res) => {
    console.log("DB connected...");
  })
  .catch((err) => {
    console.log("DB connection Failed");
    console.log(err);
  });
