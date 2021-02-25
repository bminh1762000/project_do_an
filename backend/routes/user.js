const express = require("express");
const { body } = require("express-validator");
const User = require("../models/user");

const userController = require("../controllers/user");

const router = express.Router();

router.post(
  "/signup",
  [
    body("email")
      .trim()
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((user) => {
          if (user) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password").trim().isLength({ min: 5 }),
    body("username").not().isEmpty().trim(),
  ],
  userController.signUp
);

router.put("/login", userController.login);

module.exports = router;
