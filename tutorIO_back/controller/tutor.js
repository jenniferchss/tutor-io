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
        let tutorID = req.body.userID
        let tutor = await findTutor(tutorID)
        res.json(tutor)
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







