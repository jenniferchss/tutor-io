const Tutor = require("../models/tutorModel");
const Profile = require("../models/profileModel");


const getTutorList = async () => {
    return new Promise((resolve, reject) => {
        Profile.find({ "isTutor": true })
        .then(tutorList => {
            resolve(tutorList)
        })
        .catch(err => reject(err.message))
    })
}

exports.createTutor = async (req, res) => {
    try {
        const ID = req.user.id
        console.log("ini ID: "+ ID)
        let tutor = await Tutor.find({"userID": ID}).then(items => {
            return items[0]
        })

        if (tutor) {
            console.log("masuk if ke satu")
            res.json({message: "User is already a tutor"})
        } else {
            console.log("masuk if ke dua")
            let userProfile = await Profile.find({"userID": ID}).then(items => {
                return items[0]
            })
            userProfile.isTutor = true
            tutor = new Tutor({
                "userID": userProfile.userID
            })
            console.log(userProfile)
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
            let userProfile = await Profile.find({"userID": ID}).then(items => {
                return items[0]
            })
            userProfile.isTutor = false;
            userProfile.save()
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

        let tutor = await Tutor.findOne({"userID": tutorID}).then(items => {
            return items
        })

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

        let tutor = await Tutor.find({"userID": tutorID}).then(items => {
            return items[0]
        })
        let listModules = tutor.taughtModules
        res.json(listModules);
    } catch(err) {
        res.status(400).json({message: "Error in fetching tutor"})
    }
}





