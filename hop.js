const scriptURL =
  "https://script.google.com/macros/s/AKfycbwchFOPKno8-V3fljQQmPbbRhxkiMTCR1bUZ5pSni0tyGmuiSWj6FECRYaWFjOuSw6nwA/exec";
const form = document.forms["hop-form"],
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

const memberForm = document.querySelector(".member-form"),
  buktiTransfer = document.querySelector(".bukti"),
  kodeMember = document.querySelector(".kode");
memberForm.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT") {
    buktiTransfer.classList.toggle("d-none");
    kodeMember.classList.toggle("d-none");
    buktiTransfer.querySelector("input").toggleAttribute("required");
    kodeMember.querySelector("input").toggleAttribute("required");
  }
});
