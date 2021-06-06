const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("");
    error.status = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  decodedToken = jwt.verify(token, "somesupersecretsecret");
  if (!decodedAuth) {
    const error = new Error("Not Authenticated.");
    error.status = 401;
    throw error;
  }
  req.user = decodedToken.userId;
  next();
};
