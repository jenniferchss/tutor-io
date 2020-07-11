const mongoose = require("mongoose");



const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.DB_PORT}`, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Successfully connected to DB");
    } catch (err) {
        throw(err);
    }
};

module.exports = InitiateMongoServer;
