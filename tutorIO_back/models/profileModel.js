const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
    userID: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      default: " ",
    },
    firstName: {
      type: String,
      default: " ",
    },
    lastName: {
      type: String,
      default: " ",
    },
    year: {
        type: String,
        default: " ",
    },
    faculty: {
        type: String,
        default: " ",
    },
    major: {
        type: String,
        default: " ",
    },
    telegram: {
      type: String,
      default: " ",
    },
    biography: {
      type: String,
      default: " ",
    },
    qualifications: { //foto /pdf
      type: String,
      default: " ",
    },
    isTutor: {
      type: Boolean,
      default: false,
    },
    isTutee: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
});

module.exports = mongoose.model("profile", ProfileSchema);