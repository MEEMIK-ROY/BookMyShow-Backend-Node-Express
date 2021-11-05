const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const db = require('./database/db');
const moviesModel = require('./models/moviesmodel');
const userModel = require('./models/user.model');

app.get("/",(req,res)=>{
    return res.json({"Welcome":"Welcome to bookMyShow backend"});
})

app.get("/movies",async (req,res)=>{
    const getAllMovies = await moviesModel.find();
    return res.json(getAllMovies);
})

app.get("/movie/:movie_id", async (req,res)=>{
    const {movie_id} = req.params;
    const getSingleMovie = await moviesModel.findOne({_id: movie_id});
    return res.json(getSingleMovie);
})

app.post("/user-register", async (req,res)=>{
    const addNewUser = await userModel.create(req.body);
    return res.json({success:true, data:addNewUser, message: "New User Added"});
})

app.listen(process.env.PORT,()=>{console.log(`listening at http://localhost: ${process.env.PORT}`)});