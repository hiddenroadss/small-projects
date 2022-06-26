const videoContainer = document.querySelector(".video-player");
const video = document.querySelector(".video-player__video");
const playBtn = document.querySelector(".controls__play-pause");
const theaterBtn = document.querySelector(".controls__theater");
const fullScreenBtn = document.querySelector(".controls__full-screen");
const miniPlayerBtn = document.querySelector(".controls__mini-player");

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
