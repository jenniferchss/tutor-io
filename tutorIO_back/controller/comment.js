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

const findComment = async(id) => {
    return new Promise((resolve,reject) => {
        Comment.findOne({"_id" : id})
        .then(comment => {
            resolve(comment)
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

        let cFname = commentProfile.firstName;
        let cLname = commentProfile.lastName;
        let isTutor = commentProfile.isTutor;
        let cID = commentProfile.userID;

        // var currentTime = new Date()
        // var month = currentTime.getMonth() + 1
        // var day = currentTime.getDate()
        // var year = currentTime.getFullYear()
        // var date = year + "-" + month + "-" + day

        let comment = new Comment({
            content: content,
            firstName: cFname,
            lastName: cLname,
            isTutor: isTutor,
            userID : cID,
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

exports.removeComment = async (req, res) => {
    try {
        const tutorID = req.body.userID
        let tutor = await findTutor(tutorID);

        const commentID = req.body.comID

        tutor.comments.pull(commentID)
        tutor.save();

        await Comment.findByIdAndDelete(commentID)

        res.json({message:"Deleted comment"})

    } catch(err) {
        res.status(400).json({message: "Error in deleting comment"});
    }
}
