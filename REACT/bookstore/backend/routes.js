// import express
const express = require("express");
// import userController
const userController = require("./controller/userController.js");


// create instance
const route = new express.Router();

// path for register
route.post("/register", userController.registerController);

// path for login
route.post("/login", userController.loginController);

// routes export
module.exports = route;
