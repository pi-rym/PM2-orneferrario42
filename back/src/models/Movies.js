const mongoose = require("mongoose");


const  moviesSchema = new mongoose.Schema({
    title: String ,
    year: Number,
    director:String,
    duration: Number,
    genre: Array,
    rate: Number,
    poster: String,
});

const handlerMovies = mongoose.model("movies", moviesSchema);


module.exports= {
    handlerMovies,
};