
import { signIn, createUser, auth, infoUser} from "./firebase.js";

// Register
const signupform = document.querySelector("#signup-form");
const signupmodal = document.getElementById("signup-modal")
const modal = new mdb.Modal(signupmodal)
signupform.addEventListener('submit',(e) => {
    e.preventDefault();
    const email = document.querySelector('#signup-email').value
    const password = document.querySelector('#signup-password').value
    const rut = document.querySelector('#signup-rut').value
    const phone = document.querySelector('#signup-phone').value
    createUser(auth, email, password, phone, rut)
    signupform.reset()
    modal.hide()
    window.location.href = 'index.html'
})

//Login

const signInForm = document.querySelector("#login-form");
signInForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = document.querySelector('#login-email').value
  const password = document.querySelector('#login-password').value
  signIn(auth, email, password)
  console.log(infoUser)
  signInForm.reset()
  }
)
console.log(infoUser)
//Log out
/*const logOut = document.querySelector('#log-out')
logOut.addEventListener('click' , (e) =>{
  console.log('saklsalkaslks')
})*/


