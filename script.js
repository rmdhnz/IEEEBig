const humbergerMenu = document.querySelector("main nav .humberger-menu");
const sideBar = document.querySelector(".sidebar");
humbergerMenu.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT") {
    sideBar.classList.toggle("geser");
  }
});
const menuSidebar = document.querySelectorAll(".soon");
menuSidebar.forEach((e) => {
  e.addEventListener("click", (isi) => {
    isi.preventDefault();
    alert("Coming soon");
  });
});
