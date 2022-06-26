const videoContainer = document.querySelector('.video-player');
const video = document.querySelector('.video-player__video');
const playBtn = document.querySelector('.controls__play-pause');

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

document.addEventListener('keydown', (e) => {
    switch(e.key.toLowerCase()) {
        case 'k':
        case ' ':
            togglePlay();
            break;
    }
})

playBtn.addEventListener('click', togglePlay)

video.addEventListener('play', () => {
    videoContainer.classList.remove('paused');
})

video.addEventListener('pause', () => {
    videoContainer.classList.add('paused');
})

video.addEventListener('click', () => {
    togglePlay();
})