const scriptURL =
  "https://script.google.com/macros/s/AKfycbwchFOPKno8-V3fljQQmPbbRhxkiMTCR1bUZ5pSni0tyGmuiSWj6FECRYaWFjOuSw6nwA/exec";
const form = document.forms["hop-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

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
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
