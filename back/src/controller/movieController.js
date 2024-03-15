const { funMovie } = require("../services/movieService");

const movieController = (req,res) => {
const cartelera = funMovie()
res.status(200).json(cartelera);
};

module.exports = movieController;