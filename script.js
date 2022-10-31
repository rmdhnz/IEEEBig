const humbergerMenu = document.querySelector("main nav .humberger-menu");
const sideBar = document.querySelector(".sidebar");
humbergerMenu.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT") {
    sideBar.classList.toggle("geser");
  }
});
const menuSidebar = document.querySelectorAll(".sidebar ul li a");
menuSidebar.forEach((e) => {
  e.addEventListener("click", (isi) => {
    isi.preventDefault();
    alert("Coming soon");
  });
});
const cardMenu = document.querySelectorAll(".card a");
cardMenu.forEach((e) => {
  e.addEventListener("click", (isi) => {
    isi.preventDefault();
    alert("coming soon");
  });
});
