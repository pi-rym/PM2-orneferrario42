const express = require("express");
const rutas = require("../routes/router");


const app = express();

app.use(rutas);


module.exports=app;