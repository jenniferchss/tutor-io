const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");

// Initiate Mongo Server
InitiateMongoServer();


const app = express();
// app.use(cors);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(5000, () => {
    console.log("Server started on port 5000");
});





