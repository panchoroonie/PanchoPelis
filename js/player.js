const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const type = params.get('type');

const playerContainer = document.getElementById('player-container');

// points back button to movies or shows depending on type
const backBtn = document.getElementById('back-btn');
// basically saying if move go back to movie results else go back to show results
backBtn.href = type === 'movie' ? 'movies.html' : 'shows.html';

//handles the difference url calls for movies and shows using their type
if(type === 'movie'){
    playerContainer.innerHTML = `
    <iframe
        src="https://www.vidking.net/embed/${type}/${id}?autoPlay=true&nextEpisode=true&episodeSelector=true"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen>
    </iframe>
`;
}else if(type === 'tv'){
    playerContainer.innerHTML = `
    <iframe
        src="https://www.vidking.net/embed/${type}/${id}/1/1?autoPlay=true&nextEpisode=true&episodeSelector=true"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen>
    </iframe>
`;
}
