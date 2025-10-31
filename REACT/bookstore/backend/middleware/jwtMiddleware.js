const jwtMiddleware = (req, res, next) => {
  console.log(req.header["authorization"].split(" ")[1]);
  const token = req.header["authorization"].split(" ")[1];

  console.log("Inside JWT Middleware");
  next();
};

module.exports = jwtMiddleware;
