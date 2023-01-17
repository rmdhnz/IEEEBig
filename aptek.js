const scriptURL =
  "https://script.google.com/macros/s/AKfycbyTb120-DVukJvNpzLgVBsLQGxuP-EWdZm_5a4Adu2wpBDiggNKto7DiCYS-0skQlSKFw/exec";
const form = document.forms["aptek-form"],
  btnKirim = document.querySelector(".btn-kirim"),
  btnLoading = document.querySelector(".btn-loading"),
  myAlert = document.querySelector(".my-alert");

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
