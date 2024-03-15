const {Router} = require("express");
const {movies} = require("../controller/controlador");
const movieController = require("../controller/movieController");

const rutas=Router();

rutas.get("/movies", movies);
rutas.get("/moviesII", movieController);


module.exports = rutas;