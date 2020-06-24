const express = require("express");
const router = express.Router();
const authController = require('../controller/auth');
const auth = require('../middleware/auth');

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

router.get("/verifyToken", 
    auth.verifyToken
);

module.exports = router;
