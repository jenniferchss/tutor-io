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

// const findTutorByName = async(name) => {
//     return new Promise((resolve,reject) => {
//         Tutor.find({"name" : name})
//         .then(tutors => {
//             resolve(tutors)
//         })
//         .catch(err => reject(err.message))
//     })
// }

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
                "firstName" : userProfile.firstName,
                "lastName" : userProfile.lastName
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
        req.reqModule = {
            name: req.moduleCode,
            moduleTitle: req.moduleTitle,
            faculty: req.faculty
        }
        // console.log(module)
        if (tutor.taughtModules.includes(reqModule.name)) {
            res.json("Registered")
        } else {
            tutor.taughtModules.push(reqModule.name)
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
        console.log("req.body: " + JSON.stringify(req.body, null, 2) );
        let searchName = req.body.tutorName;
        console.log("SEARCH: " + searchName);
        if (!searchName) {
            res.status(400).json({message: "No user found"})
        }

        let fullName = searchName.split(' ')
        let ffName = fullName[0]
        let llName = fullName[fullName.length - 1]
        let allTutor = await Tutor.find();
        let tutorList = []
        console.log("fullName: " + fullName);
        console.log("lastName: " + lastName);

        if (fullName.length > 1) {
            
            let firstName = ffName.toLowerCase()
            let fName = firstName[0].toUpperCase() + firstName.substring(1)

            let lastName = llName.toLowerCase()
            let lName = lastName[0].toUpperCase() + lastName.substring(1)

            for (var i = 0; i < allTutor.length; i++) {
                if (fName === allTutor[i].firstName && lName === allTutor[i].lastName) {
                    tutorList.push(allTutor[i]);
                    allTutor.splice(i,1);
                } else if (fName === allTutor[i].firstName) {
                    tutorList.push(allTutor[i]);
                    allTutor.splice(i,1);
                } else if (lName === allTutor[i].lastName) {
                    tutorList.push(allTutor[i]);
                    allTutor.splice(i,1);
                } else if (lName === allTutor[i].firstName) {
                    tutorList.push(allTutor[i]);
                    allTutor.splice(i,1);
                } else if (fName === allTutor[i].lastName) {
                    tutorList.push(allTutor[i]);
                    allTutor.splice(i,1);
                } 
            }

        } else {
            let firstName = ffName.toLowerCase()
            let fName = firstName[0].toUpperCase() + firstName.substring(1)
            // console.log("FNAME: " + fName);
            // console.log("ALL TUTOR: " + allTutor);

            for (i = 0; i < allTutor.length; i++) {
                if (fName === allTutor[i].firstName) {
                    // console.log("ALLTUTOR[" + i +"]: "+ allTutor[i])
                    tutorList.push(allTutor[i]);
                    // console.log("TUTORLIST: " + tutorList);
                    allTutor.splice(i,1);
                    // console.log("ALLTUTOR: " + allTutor);
                } else if (fName === allTutor[i].lastName) {
                    tutorList.push(allTutor[i]);
                    allTutor.splice(i,1);
                }
            }
        }
        
        console.log("TUTORS: " + tutorList)
        req.teachingTutors = tutorList
        next();
    } catch (err) {
        console.log(JSON.stringify(err, null, 2))
    }
}







