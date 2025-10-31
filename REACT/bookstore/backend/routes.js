// import express
const express = require("express");
// import userController
const userController = require("./controller/userController.js");

// import bookController
const bookController = require("./controller/bookController.js");

// import jwt middleware
const jwtMiddleware = require("./middleware/jwtMiddleware.js");

// create instance
const route = new express.Router();

// path for register
route.post("/register", userController.registerController);

// path for login
route.post("/login", userController.loginController);

// path for google login
route.post("/google-login", userController.googleLoginController);

// path for add book
route.post("/add-book", jwtMiddleware, bookController.addBookController);

// routes export
module.exports = route;
