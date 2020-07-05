const mongoose = require('mongoose')

const RatingSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    userID: {
        type: String
    },
    rate: {
        type: Number,
    }
    
});

module.exports = mongoose.model("rating", RatingSchema);