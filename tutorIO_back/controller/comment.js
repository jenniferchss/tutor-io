const Tutor = require("../models/tutorModel");
const Profile = require("../models/profileModel");
const Comment = require("../models/commentModel");

const findProfile = async(id) => {
    return new Promise((resolve,reject) => {
        Profile.findOne({"userID" : id})
        .then(tutor => {
            resolve(tutor)
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

exports.postComment = async (req, res) => {
    try {
        const {
            content,
            tutorID,
        } = req.body;
        
        const commentProfile = await findProfile(req.user.id);

        let comment = new Comment({
            profile: commentProfile,
            content: content
        });

        comment.save();

        let tutor = await findTutor(tutorID);
        tutor.comments.push(comment);
        tutor.save();
        res.json({message: "Created new comment"});

    } catch (err) {
        res.status(400).json({message: "Error in fetching tutor"});
    }
}