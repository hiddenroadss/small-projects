const items = document.querySelectorAll(".item");
const playing = [];

items.forEach((item) => {
    item.addEventListener("click", () => {
        if (playing.length) {
            const prevAudio = playing.pop();
            prevAudio.pause();
            prevAudio.currentTime = 0;
            prevAudio.parentNode.parentNode.classList.remove("active");
        }
        const audio = item.querySelector("audio");
        audio.play();
        playing.push(audio);
        item.classList.add("active");
    });
});
