const User = require("../models/userModel");
const Profile = require("../models/profileModel");

exports.editUserProfile = async(req,res) => {
    const { firstName,
            lastName,
            year,
            faculty,
            major,
            telegram,
            qualifications,
            isTutor,
            isTutee } = req.body;
    try {
        const profile = await Profile.updateOne(
            { "userID" : req.user.id}, 
            { $set: { "firstName": firstName,
                      "lastName": lastName,  
                      "year": year, 
                      "faculty": faculty, 
                      "major": major,
                      "telegram": telegram,
                      "qualifications": qualifications,
                      "isTutor": isTutor,
                      "isTutee": isTutee
                    }

            })
        res.json("BERHASIL");   
    } catch (e) {
        res.json({ message: "Error in Fetching profile" });
    }
}

exports.getUserProfile = async(req, res) => {
    try {
        const userProfile = await Profile.find({"userID" : req.user.id});
        res.json(userProfile);
      } catch (e) {
        res.status(400).json({ message: "Error in Fetching user" });
      }
}

exports.getAllTutors = async(req, res) => {
    try {
        const tutorList = await Profile.find({"isTutor" : true});
        res.json(tutorList);
    } catch (e) {
        res.status(400).json({message: "Error in Fetching tutors"});
    }
}