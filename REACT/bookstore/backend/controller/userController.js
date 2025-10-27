// register

const users = require("../model/userModel");

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
  } catch (err) {}
};
