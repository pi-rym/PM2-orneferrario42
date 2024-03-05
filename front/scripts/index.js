console.log(tempData);
$.get("https://students-api.2.us-1.fl0.io/movies").done((data) => {
    const cards = document.querySelectorAll(".card");

// Mapear y mostrar las tarjetas
tempData.forEach((movie, index) => {
    const card = cards[index];
if (card){

// Crear el contenido de la tarjeta 
    const cardContent = `
    <div class="pelicula">
    <img src="${movie.poster}"> 
        <div class="detalle"> 
        <h2>${movie.title}</h2>
        <p>Director: ${movie.director}</p>
        <p>Year: ${movie.year},Genre: ${movie.genre.join(", ")}, Duration: ${movie.duration}</p>
        <p>Duration: ${movie.duration},Rating: ${movie.rate}</p>
        <div class="btn"><h6>Ver</h6></div>
        </div>
    </div>
    `;
    
// Agregar el contenido a la tarjeta
    card.innerHTML = cardContent;
    card.classList.remove("card");  
    card.classList.add("card");  

        }
    });
    
});
const container = document.getElementsByClassName("container")[0];




// `<img src="${movie.poster}" alt="${movie.title}">
//     <h3>${movie.title}</h3>
//     <p>Director: ${movie.director}</p>
//     <p>Year: ${movie.year}</p>
//     <p>Genre: ${movie.genre.join(", ")}</p>
//     <p>Duration: ${movie.duration}</p>
//     <p>Rating: ${movie.rate}</p>
//     `;