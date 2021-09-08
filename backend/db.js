const mongoose = require("mongoose");
const mongoURI = require("./config.js");

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo");
    })
}

module.exports = connectToMongo;