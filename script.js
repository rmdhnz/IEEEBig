// const menuSidebar = document.querySelectorAll(".sidebar ul li a");
// const mainContent = document.querySelectorAll("main .main-content");
// for (let i = 0; i < menuSidebar.length; ++i) {
//   menuSidebar[i].addEventListener("click", (e) => {
//     e.preventDefault();
//     mainContent.forEach((isi) => {
//       if (!isi.classList.contains("d-none")) {
//         isi.classList.add("d-none");
//       }
//     });
//     mainContent[i].classList.remove("d-none");
//   });
// }

const humbergerMenu = document.querySelector("main nav .humberger-menu");
const sideBar = document.querySelector(".sidebar");
humbergerMenu.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT") {
    sideBar.classList.toggle("geser");
  }
});
