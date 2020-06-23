const mongoose = require("mongoose");

const MONGOURI = "mongodb://localhost:27017/userDB";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI , {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Successfully connected to DB");
    } catch (err) {
        throw(err);
    }
};

module.exports = InitiateMongoServer;
