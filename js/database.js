import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCiBuSilW0IQsIhXO_FzJZdq44J0Rv6xMk",
  authDomain: "official-portfolio-1763e.firebaseapp.com",
  databaseURL: "https://official-portfolio-1763e-default-rtdb.firebaseio.com",
  projectId: "official-portfolio-1763e",
  storageBucket: "official-portfolio-1763e.appspot.com",
  messagingSenderId: "2133081533",
  appId: "1:2133081533:web:2021fedff0a1cff7a826d4",
  measurementId: "G-RFPYQW5MQ8",
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  writeUserDatabase(name, lastname, email, phone, message);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactForm").reset();
}

function writeUserDatabase(name, lastname, email, phone, message) {
  const db = getDatabase();
  set(ref(db, "users/" + name), {
    name: name,
    lastname: lastname,
    email: email,
    phone: phone,
    message: message,
  });
}

