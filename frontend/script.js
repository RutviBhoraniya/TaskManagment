

let signout = document.getElementById("signout")
let signin = document.getElementById("signin")
let signup = document.getElementById("signup")
let isLogin = JSON.parse(localStorage.getItem('isLogin')) || false
if(isLogin){
  signin.style.display = "none"
  signup.style.display = "none"
  signout.style.display = "inline"
}else{
  signin.style.display = "inline"
  signup.style.display = "inline"
  signout.style.display = "none"
}
signout.addEventListener("click",()=>{
  localStorage.setItem('isLogin', JSON.stringify(false))
    location.reload();
})