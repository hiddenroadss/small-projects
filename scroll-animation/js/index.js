let options = {
    root: null,
};

const items = document.querySelectorAll(".item");
const observer = new IntersectionObserver(callback, options);
items.forEach((item) => observer.observe(item));

//TODO improve
function callback(entries, observer) {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            return;
        }
        entry.target.classList.remove("active");
    });
}
