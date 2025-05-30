const hamburguesa = document.querySelector(".hamburguesa");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelector('.nav-menu');
const a = document.querySelectorAll('.nav-link');

hamburguesa.addEventListener("click", () => {
  hamburguesa.classList.toggle("active");
  navMenu.classList.toggle("active");
});

a.forEach(link => {
  link.addEventListener('click', () => {
    hamburguesa.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
