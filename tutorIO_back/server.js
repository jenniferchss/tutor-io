const express = require("express");
const bodyParser = require("body-parser");
const {cors, corsConfig} = require("./middleware/cors");
const user = require("./routes/user");
const InitiateMongoServer = require("./config/db");
const morgan = require("morgan");

require("dotenv").config();

// Initiate Mongo Server
try {
    InitiateMongoServer();
} catch (e) {
    console.warn("Mongodb failed to start, ignoring...");
}

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors(corsConfig));
app.use( express.static( "public" ) );


/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server started on port 5000");
});
