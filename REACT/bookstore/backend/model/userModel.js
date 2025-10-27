// import mongoose
const mongoose = require("mongoose");

// create schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
  bio: {
    type: String,
    default: "BookStore User",
  },
});

const users = mongoose.model("users", userSchema);
module.exports = users;
