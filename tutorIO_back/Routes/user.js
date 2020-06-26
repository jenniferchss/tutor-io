const express = require("express");
const router = express.Router();
const authController = require('../controller/auth');
const auth = require('../middleware/auth');
const profileController = require('../controller/profile');

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */
router.post( "/signup",
    authController.signUp
);

/**
 * @method - POST
 * @description - Login 
 * @param - /user/login
 */
router.post("/login",
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

/**
 * @method - GET
 * @description - Verify the token (check login status)
 * @param - /user/me
 */
router.get("/verifyToken", 
    auth.verifyToken
);

/**
 * @method - GET
 * @description - Verify the token (check login status)
 * @param - /user/userProfile
 */
router.get("/userProfile",
    auth.getLoggedInUser,
    profileController.getUserProfile
)

/**
 * @method - GET
 * @description - Get list of all tutors
 * @param - /user/getAllTutor 
 */
router.get("/getAllTutor",
    profileController.getAllTutors
)

/**
 * @method - PUT
 * @description - Edit User Profile
 * @param - /user/editProfile
 */
router.put("/editProfile",
    auth.getLoggedInUser,
    profileController.editUserProfile
)


module.exports = router;
