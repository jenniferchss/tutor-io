const Tutor = require("../models/tutorModel");
const Rating = require("../models/ratingModel");

const findTutor = async(id) => {
    return new Promise((resolve,reject) => {
        Tutor.findOne({"userID" : id})
        .then(tutor => {
            resolve(tutor)
        })
        .catch(err => reject(err.message))
    })
}

const updateRating = async(rateID, newRate) => {
    return new Promise((resolve, reject) => {
        Rating.updateOne( {"_id" : rateID}, 
        { $set: { "rate": newRate}})
        .then(rating => {
            resolve(rating)
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

exports.giveRating = async(req, res, next) => {
    try {
        const userID = req.user.id
        const rate = req.body.rate
        const tutorID = req.body.tutorID

        let rating = new Rating({
            userID : userID,
            rate: rate
        });

        rating.save();

        let tutor = await findTutor(tutorID);

        tutor.ratings.push(rating);

        req.tutor = tutor;

        next();

    } catch (err) {
        res.status(400).json({ message: "Error in saving rating" });
    }
}

exports.countAverage = async(req, res) => {
    try {
        let tutor = req.tutor
        let sum = 0;

        for(var i=0; i<tutor.ratings.length;i++) {
            let rating = await findRating(tutor.ratings[i])
            sum += rating.rate
        }

        tutor.totalRating = sum / tutor.ratings.length

        await tutor.save();

        res.json(tutor.totalRating);

    } catch(err) {
        res.status(400).json({ message: "Error in counting average" });
    }
}

exports.updateRating = async(req, res, next) => { 
    try {
        let rateID = req.body.rateID;
        let tutorID = req.body.tutorID;
        let newRate = req.body.newRate;

        // console.log("raterID " + rateID);
        // console.log("tutorID " + tutorID);
        // console.log("newRate " + newRate);

        await updateRating(rateID, newRate)

        let tutor = await findTutor(tutorID)
        req.tutor = tutor;
        console.log(tutor);
        next();

    } catch(error) {
        res.status(400).json({ message: "Error in updating rating" });
    }
}
