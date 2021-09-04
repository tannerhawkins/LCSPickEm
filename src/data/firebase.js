// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",
  authDomain: "ancient-path-adventures.firebaseapp.com",
  projectId: "ancient-path-adventures",
  storageBucket: "ancient-path-adventures.appspot.com",
  messagingSenderId: "1051282870332",
  appId: "1:1051282870332:web:8f7a5922db7d370e86b339",
  measurementId: "G-NPPQJQTEQN"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider(); 
export {auth , provider};