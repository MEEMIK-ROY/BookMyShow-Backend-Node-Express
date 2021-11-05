const mongoose = require('mongoose');
const dbConn = require('../database/db');

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
},{
    strict: false
});

const user = mongoose.model("user", userSchema);

module.exports = user;