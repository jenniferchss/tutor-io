const express = require("express");
const router = express.Router();
const authController = require('../controller/auth');
const auth = require('../middleware/auth');
const profileController = require('../controller/profile');
const tutorController = require('../controller/tutor');
const moduleController = require('../controller/module');
const commentController = require('../controller/comment');

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

router.put("/changePassword",
    auth.getLoggedInUser,
    auth.verifyPassword,
    authController.changePassword
)

router.put("/changeEmail",
    auth.getLoggedInUser,
    auth.verifyPassword,
    authController.changeEmail
)

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

router.put("/deleteTutor",
    auth.getLoggedInUser,
    moduleController.removeTaughtModules,
    tutorController.deleteTutor
)

router.get("/findSpecificTutor/:module",
    moduleController.getTeachingTutor,
    tutorController.getTutorsProfile
)

router.put("/addModule",
    auth.getLoggedInUser,
    tutorController.tutorRegisterModule,
    moduleController.createModuleAddTutor
)

router.put("/deleteModule",
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

router.put("/updateFee",
    auth.getLoggedInUser,
    tutorController.updateFee
)

router.get("/getFee",
    auth.getLoggedInUser,
    tutorController.getFee
)

router.get("/getTaughtModules",
    auth.getLoggedInUser,
    tutorController.getTaughtModules
)

router.get("/tutorProfile/:tutorID",
    auth.getLoggedInUser,
    tutorController.getTutorProfile
)

// Routes for comments

router.post("/postComment",
    auth.getLoggedInUser,
    commentController.postComment
)

router.put("/deleteComment",
    commentController.removeComment
)

// Routes for rating

module.exports = router;
