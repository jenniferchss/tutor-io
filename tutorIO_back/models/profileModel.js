const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    userID: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    year: {
        type: String
    },
    faculty: {
        type: String
    },
    major: {
        type: String
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
});

module.exports = mongoose.model("profile", ProfileSchema);