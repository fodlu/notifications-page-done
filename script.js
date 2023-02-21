const mark = document.querySelector(".mark");
const blue = document.querySelectorAll(".new");
const number = document.querySelector(".number");

mark.addEventListener("click", (e) => {
  e.preventDefault();
  blue.forEach((b) => {
    b.classList.remove("new");
  });
  number.textContent = 0;
});
