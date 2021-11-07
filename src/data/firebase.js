// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Constants } from "./constants";

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
  measurementId: "G-NPPQJQTEQN",
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

export const getAllModules = async () => {
  const modules = await modulesDb.get();
  return modules.docs.map((doc) => doc.data());
};

export { auth, provider, app };
