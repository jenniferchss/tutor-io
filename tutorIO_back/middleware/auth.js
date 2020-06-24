const {check} = require("express-validator");
const jwt = require("jsonwebtoken");

exports.checkValid = [
        check("username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ];

   

exports.getLoggedInUser = function(req, res, next) {
      const token = req.headers.authorization
      
      if (!token) return res.status(401).json({ message: "No token provided" });
      console.log("Token found")
      try {
        const decoded = jwt.verify(token, "randomString");
        console.log("decoded:", JSON.stringify(decoded, null, 2));
        req.user = decoded.user;
        next();
      } catch (e) {
        console.error(e);
        res.status(500).send({ message: "Invalid Token" });
      }
    };