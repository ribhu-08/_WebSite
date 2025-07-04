const container = document.querySelector(".container");
const login = document.querySelector(".login-popup");
const signup = document.querySelector(".signup-popup");
const btn_login = document.getElementById("login");
const btn_signup = document.getElementById("signup");
const body = document.querySelector("body");
const login_btn = document.querySelector(".facebook");
const cross = document.querySelectorAll('.login-signup-cross');

cross[0].addEventListener('click', () => {
  container.style.visibility = "hidden";
  signup.style.display = "none";
  login.style.display = "none";
})
cross[1].addEventListener('click', () => {
  container.style.visibility = "hidden";
  signup.style.display = "none";
  login.style.display = "none";
})

{
  console.log(cross);
  signup.style.display = "none";
  login.style.display = "none";
}

login_btn.addEventListener('click', () => {
  container.style.backgroundColor = "rgba(1, 1, 1, 0.51)";
  container.style.visibility = "visible";
  login.style.display = "flex";
})

btn_signup.addEventListener('click', () => {
  signup.style.display = "none";
  login.style.display = "flex";
})

btn_login.addEventListener('click', () => {
  signup.style.display = "flex";
  login.style.display = "none";
})