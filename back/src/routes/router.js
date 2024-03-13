const {Router} = require("express");
const {movies} = require("../controller/controlador");

const rutas=Router();

rutas.get("/movies", movies);

module.exports = rutas;