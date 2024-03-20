// Mapear y mostrar las tarjetas
const renderCard = require ('./renderCards');
const axios = require ("axios")


//*Promesas. . .
const funcion = async ()  => {
    try {const {data} = await axios.get("http://localhost:3000/movies") //https://students-api.up.railway.app/movies
renderCard(data);
    } catch (error) {
        console.log(error)
    }
    
}
funcion()