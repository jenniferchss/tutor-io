const mongoose = require("mongoose");

const TutorSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    taughtModules: {
        type: [String],
        default: ["CS1010"]
    },
});

module.exports = mongoose.model("tutor", TutorSchema);