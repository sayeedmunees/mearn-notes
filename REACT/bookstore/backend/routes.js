// import express
const express = require("express");
// import userController
const userController = require("./controller/userController.js");

// create instance
const route = new express.Router();

// path..
route.post = ("/register", userController.registerController);

// routes export
module.exports = route;
