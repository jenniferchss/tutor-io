const Profile = require("../models/profileModel");
const Tutor = require("../models/tutorModel");
const Profile = require("../models/profileModel");
const Comment = require("../models/commentModel");
const Rating = require("../models/ratingModel");


const getUserProfile = async (id) => {
    return new Promise ((resolve, reject) => {
        Profile.find({"userID": id})
        .then(profile => {
            resolve(profile)
        })
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

const getTutorProfile = async(id) => {
try {
    let tutorID = id
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
} catch (err) {
    res.status(400).json({message: "Error in fetching tutor's profile"})
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

exports.getUserProfile = async(req, res) => {
    try {
        const id = req.user.id
        const userProfile = await getUserProfile(id)
        if (userProfile.isTutor) {
            getTutorProfile(id);
        } else {
            res.json(userProfile);
        }
      } catch (e) {
        res.status(400).json({ message: "Error in Fetching user" });
      }
}




