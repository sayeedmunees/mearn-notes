const users = require("../model/userModel");
var jwt = require("jsonwebtoken");

// register
exports.registerController = async (req, res) => {
  // logic
  const { username, email, password } = req.body;
  console.log({ username, email, password });
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(400).json("Existing User");
    } else {
      const newUser = new users({
        username,
        email,
        password,
      });
      await newUser.save(); // mongodb save
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// login
exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      if (existingUser.password == password) {
        const token = jwt.sign({ userMail: existingUser.email }, "secretkey");
        res.status(200).json({ existingUser, token });
      } else {
        res.status(401).json("Incorrect Password");
      }
    } else {
      res.status(404).json("User doesn't exists");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// google login
exports.googleLoginController = async (req, res) => {
  const { username, email, password, profile } = req.body;
  console.log(username, email, password, profile);

  try {
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      const token = jwt.sign({ userMail: existingUser.email }, "secretkey");
      res.status(200).json({ existingUser, token });
    } else {
      const newUser = new users({
        username,
        email,
        password,
        profile,
      });
      await newUser.save();
      const token = jwt.sign({ userMail: newUser.email }, "secretkey");
      res.status(200).json({ existingUser: newUser, token });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all user controller
exports.getAllUsersController = async (req, res) => {
  const email = req.payload;
  try {
    const allUsers = await users.find({ email: { $ne: email } });
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update admin profile controller
exports.editAdminProfileController = async (req, res) => {
  console.log("Inside edit admin profile controller");
  const { username, password, profile } = req.body;
  const prof = req.file ? req.file.filename : profile;
  const email = req.payload;
  console.log(email);

  try {
    const adminDetails = await users.findOneAndUpdate(
      { email },
      { username, email, password, profile: prof },
      { new: true }
    );
    // await adminDetail.save()
    res.status(200).json(adminDetails);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
    
  }
};
