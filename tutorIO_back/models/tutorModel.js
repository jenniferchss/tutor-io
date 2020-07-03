const mongoose = require("mongoose");

const TutorSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    taughtModules: {
        type: [String],
    },
    tutorProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    },
    fee: {
        type: String,
        default: 0
    },
    comments: {
        type: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'comment'
        }]
      }
});

module.exports = mongoose.model("tutor", TutorSchema);