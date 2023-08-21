// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth , signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js"
import { getFirestore, collection, addDoc, onSnapshot, query, getDoc, doc} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRhbwEiGjc7OgjymGq9cuC61QqF_aoeaU",
  authDomain: "auth0-da1f7.firebaseapp.com",
  projectId: "auth0-da1f7",
  storageBucket: "auth0-da1f7.appspot.com",
  messagingSenderId: "568294268103",
  appId: "1:568294268103:web:1517ae647312e54394f2e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const db=getFirestore();


export const signIn = (auth2, email, password)=>{
    signInWithEmailAndPassword(auth2, email, password)
    .then(()=>{
      console.log('Logeado')
    })
    .catch((error)=>{
      const errorCode = error.code
      const errorMessage = error.message
})}
export const createUser = (auth2, email, password, phone, rut)=>{
      createUserWithEmailAndPassword(auth2, email, password).then(()=>{
      const uid = auth2.currentUser.uid
      sessionStorage.uid=uid
      addDoc(collection(db,uid), {email, phone, rut})
      console.log('Registrado')

    }).catch((error)=>{
      const errorCode = error.code
      const errorMessage = error.message
    })
}
const q = query(collection(db, sessionStorage.uid));
onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    let e=doc.data()
    //console.log(e)
    sessionStorage.email=String(e.email)
    sessionStorage.rut=String(e.rut)
    sessionStorage.phone=String(e.phone)
  })
})
export let infoUser=[]
infoUser[0] = sessionStorage.email 
infoUser[1] = sessionStorage.rut
infoUser[2] = sessionStorage.phone



