let isFirstTime = true;

document.addEventListener("keypress", (event) => {
    if (isFirstTime) {
        const banner = document.querySelector(".banner");
        banner.classList.add("hide");
        const keys = document.querySelector(".keys");
        keys.style.display = "flex";
        isFirstTime = false;
    }
    const boxes = document.querySelectorAll(".box");
    boxes[1].innerText = event.key;
    boxes[2].innerText = event.code;
});
