// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBUYkeZ7jp1KXLuWKqqqxcJEuCQS4g9wnU",
  authDomain: "arquitectura-8d40d.firebaseapp.com",
  databaseURL: "https://arquitectura-8d40d-default-rtdb.firebaseio.com",
  projectId: "arquitectura-8d40d",
  storageBucket: "arquitectura-8d40d.appspot.com",
  messagingSenderId: "840870793121",
  appId: "1:840870793121:web:95299fb6188fcea3ed05e0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Exporta las funciones necesarias para que se puedan usar en otros archivos
export { database, ref, onValue };
