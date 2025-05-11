const hamburguesa = document.querySelector(".hamburguesa");
const navMenu = document.querySelector(".nav-menu");

hamburguesa.addEventListener("click", () => {
  hamburguesa.classList.toggle("active");
  navMenu.classList.toggle("active");
});
