const Profile = require("../models/profileModel");
const Tutor = require("../models/tutorModel");
const Comment = require("../models/commentModel");
const Rating = require("../models/ratingModel");
const { cloudinary } = require('../config/cloudinaryConfig');

const getUserProfile = async (id) => {
    return new Promise ((resolve, reject) => {
        Profile.findOne({"userID": id})
        .then(profile => {
            resolve(profile)
        })
        .catch(err => reject(err.message))
    })
}

const findTutorProfile = async(id) => {
    return new Promise((resolve,reject) => {
        Profile.findOne({"userID" : id})
        .then(profi => {
            resolve(profi)
        })
        .catch(err => reject(err.message))
    })
}

const findTutor = async(id) => {
    return new Promise((resolve,reject) => {
        Tutor.findOne({"userID" : id})
        .then(tutor => {
            resolve(tutor)
        })
        .catch(err => reject(err.message))
    })
}

const findComment = async (id) => {
    return new Promise((resolve, reject) => {
        Comment.find({"_id": id})
        .then(comment => {
            resolve(comment)
        })
        .catch(err => reject(err.message))
    })
}

const findRating = async (id) => {
    return new Promise((resolve, reject) => {
        Rating.findOne({"_id": id})
        .then(rating => {
            resolve(rating)
        })
        .catch(err => reject(err.message))
    })
}

exports.getUserProfile = async(req, res) => {
    try {
        const id = req.user.id
        const userProfile = await getUserProfile(id)

        console.log("ini user profile "+ userProfile)

        if (userProfile.isTutor === true) {
            console.log("masuk sini userprofile is tutor")
            let tutorID = id;
            let tutor = await findTutor(tutorID)
            tutor.tutorProfile = await findTutorProfile(tutor.userID)
        
            let Comments = []
            for(let i=0; i<tutor.comments.length; i++) {
                let comment = await findComment(tutor.comments[i])
                console.log(comment)
                Comments.push(comment);
            }
            
            let loggedInUser = req.user.id
            let yourRate = 0;
            let yourRateID = 0;
        
            console.log(loggedInUser)
            
            for(var i=0; i<tutor.ratings.length;i++) {
                let rating = await findRating(tutor.ratings[i])
                if( rating.userID === loggedInUser) {
                    yourRateID = tutor.ratings[i]
                    yourRate = rating.rate
                    break;
                }
            }
    
            res.json({tutor, Comments, loggedInUser, yourRate, yourRateID})
        } else {
            console.log("masuk kedua")
            res.json(userProfile);
        }
      } catch (e) {
        res.status(400).json({ message: "Error in Fetching user" });
      }
}

    
exports.editUserProfile = async(req,res) => {
    const { firstName,
            lastName,
            year,
            faculty,
            major,
            telegram,
            biography,
            qualifications,
            } = req.body;
    try {
        const profile = await Profile.updateOne(
            { "userID" : req.user.id}, 
            { $set: { "firstName": firstName,
                        "lastName": lastName,  
                        "year": year, 
                        "faculty": faculty, 
                        "major": major,
                        "telegram": telegram,
                        "biography": biography,
                        "qualifications": qualifications,
                    }
    
            })
            res.json("BERHASIL");   
        } catch (e) {
            res.json({ message: "Error in Fetching profile" });
        }
}

exports.updateCalendarLink = async (req, res) => {
    try{
        const link = req.body.link;
        const userID = req.user.id;

        if(!link) {
            res.status(400).json("No link provided")
        }

        const profile = await Profile.updateOne(
            {"userID" : userID},
            { $set: {
                "calendarLink" : link
            }
        });

        res.json("Calendar link updated") 
    } catch (e) {
        res.json({ message: "Error in Fetching profile" });
    }
}

exports.uploadImage = async (req, res) => {
    try {
        let id = req.user.id;
        let userProfile = await getUserProfile(id);

        const fileStr = req.body.fileString;
        // console.log("fileStr " + fileStr)
        
        const uploadedResponse = await cloudinary.uploader.upload(
            fileStr, {
                upload_preset: 'tutor_io'
            })

        console.log("uploadedResponse " + uploadedResponse);

        userProfile.image = uploadedResponse.url;
        await userProfile.save();
       
        res.json("Image uploaded");
    } catch (err) {
        res.status(400).json("Error in uploading image")
    }
}






