const Token = 'YOUR_API_KEY_HERE';
async function searchMovies(query){
    const resultsGrid = document.getElementById('results-grid');

    // ping the movie data base and search for typed word
    if(query === ''){
        resultsGrid.innerHTML = `
            <p>type something to search</p>
        `;
        return;
    }

    const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
            headers:{
                Authorization: `Bearer ${TOKEN}`
            }
        }
    );

    const data = await response.json();

    const movies = data.results;

    resultsGrid.innerHTML = '';

    if(movies.length < 1){
        resultsGrid.innerHTML = `
            <p>no results found</p>
        `;
        return;
    }

    for(const movie of data.results) {
        resultsGrid.innerHTML += `
            <a href="player.html?id=${movie.id}&type=movie">
                <div  class="movie-card">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
                    <h3>${movie.title}</h3>
                    <p>${movie.release_date}</p>
                </div>
            </a>
        `;
    }

}

async function searchShows(query){
    const resultsGrid = document.getElementById('results-grid');

    if(query === ''){
        resultsGrid.innerHTML = `
            <p>type something to search</p>
        `;
        return;
    }

    const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?query=${query}`,
        {
            headers:{
                Authorization: `Bearer ${TOKEN}`
            }
        }
    );

    const data = await response.json();

    const shows = data.results;

    resultsGrid.innerHTML = '';

    if (shows.length < 1){
        resultsGrid.innerHTML = `
            <p>no results found</p>
        `;
        return;
    }

    for(const show of shows){
        resultsGrid.innerHTML += `
            <a href="player.html?id=${show.id}&type=tv">
                <div  class="show-card">
                    <img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}"/>
                    <h3>${show.name}</h3>
                    <p>${show.first_air_date}</p>
                </div>
            </a>
        `;
    }



}

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const currPage = window.location.pathname;

searchBtn.addEventListener('click', function() {
    const query = searchInput.value;

    if(currPage.includes("movies")){
        searchMovies(query);
    }else if(currPage.includes("shows")){
        searchShows(query);
    }
});
