import "./styles/style.css";
import passwordValidate from "./passwordValidate";
import userCreatorJs from "./userCreator.Js";

const submitBtn = document.querySelector("#submitButton");
const form = document.querySelector("#form-a");
const formEmail = document.querySelector("#formEmail");
const formCountry = document.querySelector("#formCountry");
const formZipCode = document.querySelector("#formZipCode");
const formPassword = document.querySelector("#formPassword");
const formPasswordCon = document.querySelector("#formPasswordConf");

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (passwordValidate(formPassword.value, formPasswordCon.value) === true) {
    console.log("yes");
  }
});
