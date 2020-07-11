const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Profile = require("../models/profileModel");
const UserEmailer = require("./email");
const { response } = require("express");

const findUser = async(email) => {
  return new Promise((resolve,reject) => {
      User.findOne({"email" : email})
      .then(user => {
          resolve(user)
      })
      .catch(err => reject(err.message))
  })
}

const findUserByIdentity = async(id) => {
  return new Promise((resolve,reject) => {
      User.findOne({"_id" : id})
      .then(user => {
          resolve(user)
      })
      .catch(err => reject(err.message))
  })
}

exports.signUp = async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
      }

      const {
        firstName,
        lastName,
        email,
        password,
      } = req.body;  

      let user = await User.findOne({
            email: email
      });

      if (user) {
          return res.status(400).json({
              msg: "Email Already Exists"
          });
      } 

      user = new User({
          firstName,
          lastName,
          email,
          password
      });

      let profile = new Profile({
          userID: user.id,
          firstName: user.firstName,
          lastName: user.lastName
      }); 

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
        
      await user.save();
      await profile.save();

      const payload = {
          user: {
              id: user.id
          }
      };

      const token = jwt.sign(
        payload,
        "randomString", {
                expiresIn: '1d'
            },
      );
      
      const response = {
        token: token,
        user: user
      }   

      UserEmailer.verifyUserRegis(response)
      .then((info,response) => {
        res.json({
          message: "User created and email sent"
        });
      })
      .catch(err => res.json(err.message));

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
};

exports.signIn = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({
        email
      });
      if (!user)
        return res.status(400).json({
          message: "User Not Exist"
        });
      
      if(!user.isVerified) {
        return res.status(400).json({
          message: "User is not verified"
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Incorrect Password !"
        });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: "1h"
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token, user
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error"
      });
    }
  };

exports.getLoggedInUser = async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.status(400).json({ message: "Error in Fetching user" });
    }
};


exports.changePassword = async (req,res) => {
  try {
      const reqPassword = req.body.newPassword;
      let user = req.user
      
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(reqPassword, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: "1h"
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    
  } catch (err) {
    res.status(400).json({ message: "Error in changing password" });
  }
};

exports.changeEmail = async(req, res) => {
  try {
    const reqEmail = req.body.newEmail;

    console.log(reqEmail)

    let user = req.user;

    user.email = reqEmail;

    await user.save();

    res.json({message: "Changed email"})

  } catch (err) {
    res.status(400).json({ message: "Error in changing email" });
  }
}

exports.verifyUser = async(req, res) => {
  try {
    let id = req.user.id
    let user = await findUserByIdentity(id)
    user.isVerified = true;
    user.save();
    
    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(
      payload,
      "randomString",
      {
        expiresIn: "1h"
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token, user
        });
      }
    );
  } catch (err) {
    res.status(400).json({ message: "Error in verify user" });
  }
}

exports.resendEmail = async(req, res) => {
  try{
    let email = req.body.email
    console.log(email)
    const user = await findUser(email);

    if(!user) {
      res.status(400).json("User does not exists");
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    const token = jwt.sign(
      payload,
      "randomString", {
              expiresIn: '1d'
          },
    );
    
    const response = {
      token: token,
      user: user
    }   

    UserEmailer.verifyUserRegis(response)
    .then((info,response) => {
      res.json({
        message: "Email re-sent"
      });
    })
    .catch(err => res.json(err.message));

  } catch(err) {
    res.json(err.message);
  }
}




