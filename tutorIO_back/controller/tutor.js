const Tutor = require("../models/tutorModel");
const Profile = require("../models/profileModel");
const Comment = require("../models/commentModel");
const Rating = require("../models/ratingModel");

const getTutorList = async () => {
    return new Promise((resolve, reject) => {
        Profile.find({ "isTutor": true })
        .then(tutorList => {
            resolve(tutorList)
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

const findTutorByID = async(id) => {
    return new Promise((resolve,reject) => {
        Tutor.findOne({"_id" : id})
        .then(tutor => {
            resolve(tutor)
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

const findTutorByName = async(name) => {
    return new Promise((resolve,reject) => {
        Tutor.find({"name" : name})
        .then(tutors => {
            resolve(tutors)
        })
        .catch(err => reject(err.message))
    })
}

exports.createTutor = async (req, res) => {
    try {
        const ID = req.user.id
        
        let tutor = await findTutor(ID);
        

        if (tutor) {
            console.log("masuk if ke satu")
            res.json({message: "User is already a tutor"})
        } else {

            console.log("masuk if ke dua")
            let userProfile = await findTutorProfile(ID)
            userProfile.isTutor = true
            // console.log("Ini user profiel " + userProfile)
            tutor = new Tutor({
                "userID": userProfile.userID,
                "tutorProfile": userProfile,
                "name" : userProfile.firstName + userProfile.lastName
            })

            console.log(tutor.tutorProfile)
            userProfile.save()
            tutor.save()
            res.json({message: "User is now a tutor"})
        } 
    } catch(err) {
        console.error("Error in creating tutor", err);
        res.status(400).json({message:"Error in creating tutor"})
    }
}

exports.deleteTutor = async(req, res) => {
    try {
        const ID = req.user.id
        let tutor = await Tutor.find({"userID" : ID}).then(items => {
            return items[0]
        })
        
        if (!tutor) {
            res.json({message: "User is not a tutor"})
        } else {
            let userProfile = await findTutorProfile(ID);
            userProfile.isTutor = false;
            userProfile.save();

            let tutor = await findTutor(ID);

            
            req.taughtMods = tutor.taughtModules;
            console.log(req.taughtMods)

            Tutor.deleteOne({"userID": ID}, function (err) {
                if(err) console.log(err);
                console.log("Successful deletion");
            });
            res.json({message: "User is no longer a tutor"})
            
        } 
    } catch(err) {
        res.status(400).json({message:"Error in deleting tutor"})
    }
}

exports.getAllTutors = async(req, res) => {
    try {
        const tutorList = await getTutorList()
        res.json(tutorList)
    } catch (e) {
        res.status(400).json({message: "Error in Fetching tutors"});
    }
}

exports.tutorRegisterModule = async(req, res, next) => {
    try {
        let tutor = await Tutor.findOne({"userID" : req.user.id}).then(items => {
            return items
        })
        let module = req.body
        console.log(module)
        if (tutor.taughtModules.includes(module.name)) {
            res.json("Registered")
        } else {
            tutor.taughtModules.push(module.name)
            tutor.save()
            req.tempTutor = tutor
            next();
        }    
    }
    catch (err) {
        res.status(400).json({message: "Error in fetching tutor"})
    }
}

exports.tutorDeleteModule = async(req, res, next) => {
    try {
        let tutorID = req.user.id
        let module = req.body.module
        console.log(module)

        let tutor = await findTutor(tutorID)

        console.log("Sebelum delete" + tutor)

        tutor.taughtModules.pull(module)

        console.log("Setelah delete" + tutor)

        tutor.save()

        req.module = module
        req.tempTutor = tutor

        next();
    }
    catch (err) {
        res.status(400).json({message: "Error in fetching tutor"})
    }
}

exports.getTaughtModules = async (req, res) => {
    try {
        let tutorID = req.user.id

        let tutor = await Tutor.findOne({"userID": tutorID}).then(items => {
            return items
        })
        let listModules = tutor.taughtModules
        res.json(listModules);
    } catch(err) {
        res.status(400).json({message: "Error in fetching tutor"})
    }
}

exports.updateFee = async (req,res) => {
    try {
        let tutorID = req.user.id
        let fee = req.body.fee

        console.log(tutorID)
        console.log(fee)
        await Tutor.updateOne(
            { "userID" : tutorID}, 
            { $set: { "fee": fee}
            })

        res.json({message: "Updated fee"})
    }
    catch (err) {
        res.status(400).json({message: "Error in updating fees"})
    }
}

exports.getFee = async (req, res) => {
    try {
        let tutorID = req.user.id
        let tutor = await findTutor(tutorID)
        res.json(tutor.fee);
    }
    catch (err) {
        res.status(400).json({message: "Error in fetching fees"})
    }
}

exports.getTutorProfile = async(req, res) => {
    try {
        let tutorID = req.params.tutorID 
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

exports.getTutorsProfile = async(req, res) => {
    try{
        let listTutors = req.teachingTutors
        console.log(listTutors)
        let tutors = [];

        for(var i=0; i < listTutors.length; i++) {
            let tutor = await findTutorByID(listTutors[i])
            tutor.tutorProfile = await findTutorProfile(tutor.userID)
            tutors.push(tutor)
        }
        res.json(tutors);
        
    } catch(err) {
        res.status(400).json({ message: "Error in Fetching user" });
    }
}

exports.findTutor = async(req, res, next) => {
    try {
        let tutorName = req.body.tutorName;
        let tutors = await findTutorByName(tutorName);
        console.log("Tutors " + tutors)
        req.teachingTutors = tutors
        next();
    } catch (err) {
        res.status(400).json({message: "Error in fetching tutor"})
    }
}







