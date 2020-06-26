const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
    userID: {
      type: String,
      required: true
    },
    userName: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    year: {
        type: String,
    },
    faculty: {
        type: String,
    },
    major: {
        type: String,
    },
    telegram: {
      type: String,
    },
    biography: {
      type: String,
    },
    qualifications: { //foto /pdf
      type: String,
    },
    isTutor: {
      type: Boolean,
    },
    isTutee: {
      type: Boolean,
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
});

module.exports = mongoose.model("profile", ProfileSchema);