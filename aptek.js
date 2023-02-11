const scriptURL =
  "https://script.google.com/macros/s/AKfycbyTb120-DVukJvNpzLgVBsLQGxuP-EWdZm_5a4Adu2wpBDiggNKto7DiCYS-0skQlSKFw/exec";
const form = document.forms["aptek-form"],
  btnKirim = document.querySelector(".btn-kirim"),
  btnLoading = document.querySelector(".btn-loading"),
  myAlert = document.querySelector(".my-alert"),
  inputNama = document.querySelector(".input-nama"),
  inputEmail = document.querySelector(".input-email"),
  inputAngkatan = document.querySelector(".input-angkatan"),
  inputTelp = document.querySelector(".input-telp"),
  inputModul = document.querySelector(".input-modul");
let dataModul = [0, 0, 0];
const option = inputModul.getElementsByTagName("option");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnKirim.classList.toggle("d-none");
  btnLoading.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnKirim.classList.toggle("d-none");
      btnLoading.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      dataModul[inputModul.value - 1]++;
      if (dataModul[1] == 2) {
        option[3].setAttribute("disabled", "disabled");
      }
      console.log(option[3]);
      form.reset();
      console.log(response);
    })
    .catch((error) => console.error("Error!", error.message));
});
