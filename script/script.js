const container = document.querySelector(".container-login");
const login = document.querySelector(".login-popup");
const signup = document.querySelector(".signup-popup");
const btn_login = document.getElementById("login");
const btn_signup = document.getElementById("signup");
const body = document.querySelector("body");
const login_btn = document.querySelector(".login-btn");
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

const box = document.querySelector('.categories-sec');
const l_shift = document.querySelector('.left-slide');
const r_shift = document.querySelector('.right-slide');

let offset = 0;
let count = 0;
let offset_amount = 380;

const l_shift_listner = l_shift.addEventListener('click', () => {
    if(count <= 0){
      l_shift.removeEventListener(l_shift_listner);
      offset = 0;
    }else{
      count -= 1;
      offset += offset_amount;
      box.style.transform = `translateX(${offset}px)`;
      box.style.transition = 'ease-in-out 0.4s'; 
    }

})
r_shift.addEventListener('click', () => {
    if(count <= 3){
        count++;
    offset -= offset_amount;
    box.style.transform = `translateX(${offset}px)`;
      box.style.transition = 'ease-in-out 0.4s'; 

    }
    
    
})
