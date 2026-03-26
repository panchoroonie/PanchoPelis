//Copy this file with the name search.js and delete this one
//get your own api key by signing up for https://www.themoviedb.org

const TOKEN = 'YOUR_API_KEY_HERE';
//function to search movies
async function searchMovies(query){
    //declares the results grid dynamically filling div in the html
    const resultsGrid = document.getElementById('results-grid');

    // check if the search is empty
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

    //clear the results before adding result to the grid
    resultsGrid.innerHTML = '';

    //if there are no results say something
    if(movies.length < 1){
        resultsGrid.innerHTML = `
            <p>no results found</p>
        `;
        return;
    }

    //go through each movie getting their data then making amovie card out of it and adding it to the result list
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
    //declares the results grid dynamically filling div in the html
    const resultsGrid = document.getElementById('results-grid');

    // check if the search is empty
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

    //clear the results before adding result to the grid
    resultsGrid.innerHTML = '';

    //if there are no results say something
    if (shows.length < 1){
        resultsGrid.innerHTML = `
            <p>no results found</p>
        `;
        return;
    }

    //go through each shows getting their data then making amovie card out of it and adding it to the result list
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

//search button logic
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const currPage = window.location.pathname;

// check if to use searchMovies or searchShows based on their pathname
//also check for enter key OR the search button press
searchInput.addEventListener('keydown', function(key){
    const query = searchInput.value;

    if(key.key === 'Enter'){
        if(currPage.includes("movies")){
            searchMovies(query);
        }else if(currPage.includes("shows")){
            searchShows(query);
        }
    }
})

searchBtn.addEventListener('click', function() {
    const query = searchInput.value;

    if(currPage.includes("movies")){
        searchMovies(query);
    }else if(currPage.includes("shows")){
        searchShows(query);
    }
});
