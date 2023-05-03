// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqo2bMKg-ZlayQ-kiQ7aHLLlO5meHHtSU",
  authDomain: "tlm-auth-development.firebaseapp.com",
  databaseURL: "https://tlm-auth-development-default-rtdb.firebaseio.com",
  projectId: "tlm-auth-development",
  storageBucket: "tlm-auth-development.appspot.com",
  messagingSenderId: "132801162325",
  appId: "1:132801162325:web:1bc6154cdfedbc5b23b8dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;