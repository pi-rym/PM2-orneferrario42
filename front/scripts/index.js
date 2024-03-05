console.log(tempData);

const container = document.getElementsByClassName("container")[0];
const cards = document.querySelectorAll(".card");

// Mapear y mostrar las tarjetas
tempData.forEach((movie, index) => {
    const card = cards[index];
if (card){

// Crear el contenido de la tarjeta 
    const cardContent = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>Director: ${movie.director}</p>
    <p>Year: ${movie.year}</p>
    <p>Genre: ${movie.genre.join(", ")}</p>
    <p>Duration: ${movie.duration}</p>
    <p>Rating: ${movie.rate}</p>
    `;
    
// Agregar el contenido a la tarjeta
    card.innerHTML = cardContent;
    card.classList.remove("card");  
    card.classList.add("card");  



}
});