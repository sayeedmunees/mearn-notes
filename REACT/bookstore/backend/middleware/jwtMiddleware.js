const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
  console.log(req.headers["authorization"].split(" ")[1]);
  const token = req.headers["authorization"].split(" ")[1];

  console.log(token);

  try {
    const jwtResponse = jwt.verify(token, "secretkey");
    console.log(jwtResponse);
    req.payload = jwtResponse.userMail;
  } catch (err) {
    res.status(401).json("Invalid Token");
  }
  next();
};

module.exports = jwtMiddleware;
