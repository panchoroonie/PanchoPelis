const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const type = params.get('type');

const playerContainer = document.getElementById('player-container');

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
