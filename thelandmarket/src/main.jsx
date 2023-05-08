import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCqo2bMKg-ZlayQ-kiQ7aHLLlO5meHHtSU",
  authDomain: "tlm-auth-development.firebaseapp.com",
  databaseURL: "https://tlm-auth-development-default-rtdb.firebaseio.com",
  projectId: "tlm-auth-development",
  storageBucket: "tlm-auth-development.appspot.com",
  messagingSenderId: "132801162325",
  appId: "1:132801162325:web:1bc6154cdfedbc5b23b8dc"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
