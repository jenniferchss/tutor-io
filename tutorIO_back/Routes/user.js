const express = require("express");
const router = express.Router();
const authController = require('../controller/auth');
const auth = require('../middleware/auth');
const profileController = require('../controller/profile');
const tutorController = require('../controller/tutor');
const moduleController = require('../controller/module');

// Router for Authentication

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

// Router for Profile

/**
 * @method - GET
 * @description - Get user profile
 * @param - /user/userProfile
 */
router.get("/userProfile",
    auth.getLoggedInUser,
    profileController.getUserProfile
)

/**
 * @method - PATCH
 * @description - Edit User Profile
 * @param - /user/editProfile
 */
router.patch("/editProfile",
    auth.getLoggedInUser,
    profileController.editUserProfile
)

// Router for Tutors

/**
 * @method - GET
 * @description - Get list of all tutors
 * @param - /user/getAllTutor 
 */
router.get("/getAllTutor",
    tutorController.getAllTutors
)

/**
 * @method - PATCH
 * @description - To set the user become a tutor
 * @param - /user/createTutor
 */
router.patch("/createTutor",
    auth.getLoggedInUser,
    tutorController.createTutor
)

router.delete("/deleteTutor",
    auth.getLoggedInUser,
    tutorController.deleteTutor
)

router.get("/findSpecificTutor/:module",
    moduleController.getTeachingTutor,
    profileController.getTeachingTutors
)

router.put("/addModule",
    auth.getLoggedInUser,
    tutorController.tutorRegisterModule,
    moduleController.createModuleAddTutor
)

router.delete("/deleteModule",
    auth.getLoggedInUser,
    tutorController.tutorDeleteModule,
    moduleController.removeTutor
)

router.get("/getAllModules",
    moduleController.getListOfModules
)

router.get("/findSpecificModules/:faculty",
    moduleController.getListofSpecificModules
)


module.exports = router;
