const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const type = params.get('type');

const playerContainer = document.getElementById('player-container');

// points back button to movies or shows depending on type
const backBtn = document.getElementById('back-btn');
// basically saying if move go back to movie results else go back to show results
backBtn.href = type === 'movie' ? 'movies.html' : 'shows.html';

//store current watch progress url to local storage
window.addEventListener('message', function(message){
    const msgdata = JSON.parse(message.data);
    const media = msgdata.data;

    if(media.event !== 'timeupdate'){
        return;
    }else{
        if(media.mediaType === "movie"){
            localStorage.setItem(media.id, media.currentTime);
        }else if(media.mediaType === "tv"){
            totalString = media.season + "/" + media.episode + "/" + media.currentTime;
            localStorage.setItem(media.id, totalString)
        }
    }
});


//handles the difference url calls for movies and shows using their type
if(type === 'movie'){
    if(localStorage.getItem(id)){
        playerContainer.innerHTML = `
        <iframe
        src="https://www.vidking.net/embed/${type}/${id}?progress=${localStorage.getItem(id)}"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen>
        </iframe>
    `;
    }else{
    playerContainer.innerHTML = `
    <iframe
        src="https://www.vidking.net/embed/${type}/${id}?"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen>
    </iframe>
    `;
    }
}else if(type === 'tv'){
    if(localStorage.getItem(id)){
        const slash = localStorage.getItem(id).split('/');
        playerContainer.innerHTML = `
        <iframe
            src="https://www.vidking.net/embed/${type}/${id}/${slash[0]}/${slash[1]}?progress=${slash[2]}autoPlay=true&nextEpisode=true&episodeSelector=true"
            width="100%"
            height="600"
            frameborder="0"
            allowfullscreen>
        </iframe>
    `;
    }else{
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
}
