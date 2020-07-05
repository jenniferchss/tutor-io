const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now()
    },
    profile: {
        type: mongoose.Schema.ObjectId,
        ref: 'profile'
    },
    firstName: {
        type: String,
        default: "",
    },
    lastName: {
        type: String,
        default: "",
    },
    userID: {
        type: String,
    },
    isTutor: {
        type: Boolean,
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model("comment", CommentSchema);