const url = "https://api.sampleapis.com/movies/animation/"

async function getMovies() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    displayMovies(result);
  } catch (error) {
    console.error(error.message);
  }
}

function displayMovies(data){
    const movieContainer = document.querySelector("#container");
    //Display movie title and poster
    for (const movie of data){
        const movieBox = `<div class="movie-box">
            <h2>${movie.title}</h2>
            <img src="${movie.posterURL}" alt="${movie.title}">   
        </div>`;
        
        // Append this movie to the rest of the html in #container
        movieContainer.innerHTML += movieBox;
    }
}

getMovies(url);
