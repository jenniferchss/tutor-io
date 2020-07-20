const mongoose = require("mongoose");
require("dotenv").config();


const InitiateMongoServer = async () => {
    try {
        console.log("Masuk DB initiate");
        await mongoose.connect(`${process.env.MONGODB_URL}`, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Successfully connected to DB");
    } catch (err) {
        throw(err);
    }
};

module.exports = InitiateMongoServer;

// MONGODB_URL = mongodb+srv://admin-robin:Arisanbahagia00@cluster0.nqolm.mongodb.net/userDB
