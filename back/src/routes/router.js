const {Router} = require("express");
const {movies} = require("../controller/controlador");
const movieController = require("../controller/movieController");

const rutas=Router();

rutas.get("/movies", movieController);



module.exports = rutas;