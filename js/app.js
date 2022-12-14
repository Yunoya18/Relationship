// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ2R2VsEAtez0rww3CC43KErhigGgKH00",
  authDomain: "relationship-34840.firebaseapp.com",
  projectId: "relationship-34840",
  storageBucket: "relationship-34840.appspot.com",
  messagingSenderId: "215001641076",
  appId: "1:215001641076:web:ad41b94b8a52a7af09a121",
  measurementId: "G-PWRVYSQLXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const form = document.getElementById("addForm")

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  addDoc(collection(db,'user'),{
    one:form.one.value,
    two:form.two.value,
    three:form.three.value,
    four:form.four.value,
    five:form.five.value,
    six:form.six.value
  })
})

document.getElementById("addForm").onsubmit=function() {
    let q1 = parseInt(document.querySelector('input[name = "one"]:checked').value);
    let q2 = parseInt(document.querySelector('input[name = "two"]:checked').value);
    let q3 = parseInt(document.querySelector('input[name = "three"]:checked').value);
    let q4 = parseInt(document.querySelector('input[name = "four"]:checked').value);
    let q5 = parseInt(document.querySelector('input[name = "five"]:checked').value);
    let q6 = parseInt(document.querySelector('input[name = "six"]:checked').value);
        
    let result = q1 + q2 + q3 + q4 + q5 + q6;
        
    document.getElementById("score").innerHTML = result;

    return false; // required to not refresh the page; just leave this here
} //this ends the submit function
        