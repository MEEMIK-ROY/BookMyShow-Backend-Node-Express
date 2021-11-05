const mongoose = require('mongoose');
const dbConn = require('../database/db');

var moviesSchema = mongoose.Schema({
    imageUrl: String,
    title: String,
    actor: String
},{
    strict: false
});

const movies = mongoose.model("Movies", moviesSchema);

module.exports = movies;