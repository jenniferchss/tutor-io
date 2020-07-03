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
    content: {
        type: String,
        default: "",
    }
});

module.exports = mongoose.model("comment", CommentSchema);