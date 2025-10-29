// register

const users = require("../model/userModel");

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

// register
exports.loginController = async (req, res) => {
  // logic
  const { email, password } = req.body;
  console.log({ email, password });
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      if (existingUser.password == password) {
        res.status(200).json(existingUser);
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
