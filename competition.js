const scriptURL =
  "https://script.google.com/macros/s/AKfycbx6D87zMlNE5jPYo0kATpoVYdWFMYQm3djP-VOP6aMwEouMMS-ARvx2HZwojVmgTt1kuw/exec";
const form = document.forms["competition-form"],
  btnKirim = document.querySelector(".btn-kirim"),
  btnLoading = document.querySelector(".btn-loading"),
  myAlert = document.querySelector(".my-alert"),
  allSection = document.querySelectorAll("section");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnKirim.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnKirim.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      allSection.forEach((sesi) => {
        sesi.classList.toggle("d-none");
      });
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
