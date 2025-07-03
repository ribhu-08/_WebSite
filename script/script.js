const container = document.querySelector(".container");
const login = document.querySelector(".login-popup");
const signup = document.querySelector(".signup-popup");
const btn_login = document.getElementById("login");
const btn_signup = document.getElementById("signup");
const body = document.querySelector("body");
const login_btn = document.querySelector(".facebook");
{
  signup.style.display = "none";
  login.style.display = "none";
}

login_btn.addEventListener('click', () => {
  body.style.backgroundColor = "rgba(0,0,0,0.1)";
  container.style.visibility = "visible";
  login.style.display = "block";
})

btn_signup.addEventListener('click', () => {
  body.style.backgroundColor = "rgba(0,0,0,0.1)";
  signup.style.display = "none";
  login.style.display = "block";
})

btn_login.addEventListener('click', () => {
  body.style.backgroundColor = "rgba(0,0,0,0.1)";
  signup.style.display = "block";
  login.style.display = "none";
})