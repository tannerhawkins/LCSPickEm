// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { Constants } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjHLGz8O2l74nClTF96qs2nQVVFNQStIo",
  authDomain: "lcspickem-26ae4.firebaseapp.com",
  projectId: "lcspickem-26ae4",
  storageBucket: "lcspickem-26ae4.appspot.com",
  messagingSenderId: "980876753088",
  appId: "1:980876753088:web:787a12fa35989aeaca5525",
  measurementId: "G-71Q0N4KSYM"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export const userDataDb = db.collection("userData");
export const gameDataDb = db.collection("gameData");

export { auth, provider, app };
