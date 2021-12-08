// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { Constants } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRYQ28vxe22y_CxDMFecaF8MHz8cfuf0c",
  authDomain: "ancient-path-adventures-lms.firebaseapp.com",
  projectId: "ancient-path-adventures-lms",
  storageBucket: "ancient-path-adventures-lms.appspot.com",
  messagingSenderId: "343950332366",
  appId: "1:343950332366:web:9e919e39fd98ada2cb1b9f",
  measurementId: "G-TG2JR6SDT9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();

export const userDataDb = Constants.IN_CYPRESS_TEST
  ? db.collection("testUserData")
  : db.collection("userData");
export const classDataDb = Constants.IN_CYPRESS_TEST
  ? db.collection("testClassData")
  : db.collection("classData");
export const modulesDb = Constants.IN_CYPRESS_TEST
  ? db.collection("testModules")
  : db.collection("modules");
export const realModulesDb = db.collection("modules");
export const realClassDb = db.collection("classData");
export const realUserDataDb = db.collection("userData");
export const apaModulesDb = db.collection("apaModules");

export { auth, provider, app };
