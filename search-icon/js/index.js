const btn = document.querySelector(".search__btn");
const input = document.querySelector(".search__input");
const search = document.querySelector(".search");

btn.addEventListener("click", () => {
  const isActive = search.classList.contains("active");
  isActive ? input.blur() : input.focus();
  search.classList.toggle("active");
});
