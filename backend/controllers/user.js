const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Invalid input.");
    error.status = 422;
    throw error;
  }
  const { email, password, username, role } = req.body;
  let roleUser;
  try {
    const hashPw = await bcrypt.hash(password, 12);
    if (!role) {
      roleUser = "user";
    }
    const user = new User({
      email: email,
      password: hashPw,
      name: username,
      role: roleUser,
    });
    await user.save();
    res.status(201).json({ message: "Created user." });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("Email or password incorrect.");
      error.status = 404;
      throw error;
    }
    const isEqualPw = bcrypt.compare(password, user.password);
    if (!isEqualPw) {
      const error = new Error("Email or password incorrect.");
      error.status = 404;
      throw error;
    }
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
      },
      "somesupersecretsecret",
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .json({ token: token, userId: user._id.toString(), role: user.role });
  } catch (err) {
    if (!err.status) {
      err.status = 500;
    }
    next(err);
  }
};
