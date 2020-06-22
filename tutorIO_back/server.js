const express = require("express");
const bodyParser = require("body-parser");
const {cors, corsConfig} = require("./middleware/cors");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
try {
    InitiateMongoServer();
} catch (e) {
    console.warn("Mongodb failed to start, ignoring...");
}

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors(corsConfig));

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
