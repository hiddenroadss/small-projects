const videoContainer = document.querySelector(".video-player");
const video = document.querySelector(".video-player__video");
const playBtn = document.querySelector(".controls__play-pause");
const theaterBtn = document.querySelector(".controls__theater");
const fullScreenBtn = document.querySelector(".controls__full-screen");
const miniPlayerBtn = document.querySelector(".controls__mini-player");
const muteBtn = document.querySelector('.volume__btn');
const volumeSlider = document.querySelector('.volume__slider');

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function toggleTheaterMode() {
    videoContainer.classList.toggle("theater");
}

function toggleFullScreenMode() {
    if (document.fullscreenElement == null) {
        videoContainer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function toggleMiniPlayerMode() {
    if (videoContainer.classList.contains("mini-player")) {
        document.exitPictureInPicture();
    } else {
        video.requestPictureInPicture();
    }
}

function toggleMute() {
    video.muted = !video.muted;
}

document.addEventListener("keydown", (e) => {
    const tagName = document.activeElement.tagName.toLowerCase();
    if (tagName === "input") return;

    switch (e.key.toLowerCase()) {
        case " ":
            if (tagName === "button") return;
        case "k":
            togglePlay();
            break;
        case "f":
            toggleFullScreenMode();
            break;
        case "t":
            toggleTheaterMode();
            break;
        case "i":
            toggleMiniPlayerMode();
            break;
        case 'm':
            toggleMute();
            break;
    }
});

document.addEventListener("fullscreenchange", () => {
    videoContainer.classList.toggle("full-screen", document.fullscreenElement);
});

document.addEventListener("enterpictureinpicture", () => {
    videoContainer.classList.add("mini-player");
});

document.addEventListener("leavepictureinpicture", () => {
    videoContainer.classList.remove("mini-player");
});

theaterBtn.addEventListener("click", toggleTheaterMode);
fullScreenBtn.addEventListener("click", toggleFullScreenMode);
miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode);

playBtn.addEventListener("click", togglePlay);

video.addEventListener("play", () => {
    videoContainer.classList.remove("paused");
});

video.addEventListener("pause", () => {
    videoContainer.classList.add("paused");
});

video.addEventListener("click", () => {
    togglePlay();
});

muteBtn.addEventListener('click', toggleMute);
video.addEventListener('volumechange', () => {
    volumeSlider.value = video.volume;
    let volumeLevel;
    if (video.muted || video.volume === 0) {
        volumeSlider.value = 0;
        volumeLevel = 'muted';
    } else if (video.volume >= .5) {
        volumeLevel = 'high';
    } else {
        volumeLevel = 'low';
    }

    videoContainer.dataset.volumeLevel = volumeLevel;
})

volumeSlider.addEventListener('input', (e) => {
    video.volume = e.target.value;
    video.muted = e.target.value  === 0 ;
})

video.addEventListener("mousemove", e => {
    // clear the timer if it is set when the mouse move
    const timer = video.getAttribute("timer");
    if (timer) {
      clearTimeout(timer);
      video.setAttribute("timer", "");
    }
  
    const t = setTimeout(() => {
      video.setAttribute("timer", "");
      video.classList.add("hide-cursor");
    }, 3500);
    video.setAttribute("timer", t);
  
    video.classList.remove("hide-cursor");
  });