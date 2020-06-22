const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authController = require('../controller/auth');
const auth = require('../middleware/auth');
const User = require("../models/userModel");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post( "/signup",
    auth.checkValid,
    authController.signUp
);

router.post("/login",
    auth.checkValid,
    authController.signIn
);

/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/me
 */
router.get("/me", 
    auth.getLoggedInUser,
    authController.getLoggedInUser 
  );

module.exports = router;