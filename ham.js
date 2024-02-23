document.addEventListener('DOMContentLoaded', function () {
const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
const links = document.querySelectorAll(".drop-menu-item a");
const smenu = document.getElementById("menu");//  menu　
const smenuok = document.querySelector('.drop-menu-list');//  子menu　

// btn　操作で　btn menu　toggle
btn.addEventListener("click", () => {
  btn.classList.toggle("on");
  menu.classList.toggle("on");

});

links.forEach((link) => {
  link.addEventListener("click", () => {
    btn.classList.toggle("on");
    menu.classList.toggle("on");

  });
});

smenu.addEventListener("click", () => {
  console.log ("on");

});
});

