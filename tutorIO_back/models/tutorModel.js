const mongoose = require("mongoose");

const TutorSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    taughtModules: {
        type: [String],
        default: undefined
    },
});

module.exports = mongoose.model("tutor", TutorSchema);