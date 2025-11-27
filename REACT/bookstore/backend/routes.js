// import express
const express = require("express");
// import userController
const userController = require("./controller/userController.js");

// import bookController
const bookController = require("./controller/bookController.js");

// import jwt middleware
const jwtMiddleware = require("./middleware/jwtMiddleware.js");

// import multer Config
const multerConfig = require("./middleware/multerMiddleware.js");
const jwtAdminMiddleware = require("./middleware/jwtAdminMiddleware.js");

// create instance
const route = new express.Router();

// path for register
route.post("/register", userController.registerController);

// path for login
route.post("/login", userController.loginController);

// path for google login
route.post("/google-login", userController.googleLoginController);

// path to get home book
route.get("/all-home-book", bookController.getHomeBookController);

// ------ USER -----------

// path for add book
route.post(
  "/add-book",
  jwtMiddleware,
  multerConfig.array("uploadImages", 3),
  bookController.addBookController
);

// path for all book
route.get("/all-book", jwtMiddleware, bookController.getAllBookController);

// path for all book
route.get("/view-book/:id", bookController.getABookController);

// ------------ADMIN------------

// path for Admin All books....
route.get(
  "/admin-all-books",
  jwtAdminMiddleware,
  bookController.getAllBookAdminController
);

// path for approve book....
route.put(
  "/approve-book",
  jwtAdminMiddleware,
  bookController.approveBookController
);

// path for Admin All Users.....
route.get(
  "/all-users",
  jwtAdminMiddleware,
  userController.getAllUsersController
);

// path for update admin users....
route.put(
  "profile-update",
  jwtAdminMiddleware,
  multerConfig.single("profile"),
  userController.editAdminProfileController
);

// routes export
module.exports = route;
