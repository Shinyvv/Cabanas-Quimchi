// 1. Importa las funciones necesarias de los SDK que necesitas
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Agrega aquí la configuración de tu proyecto de Firebase
// 2. Reemplaza el siguiente objeto con la configuración de tu propio proyecto de Firebase.
// Puedes obtener esta configuración desde la consola de Firebase:
// Ve a la configuración de tu proyecto -> General -> Tus aplicaciones -> Configuración de SDK -> Configuración
const firebaseConfig = {
  apiKey: "AIzaSyA_xVnctVondSM9bCnarZtwklp2IhGgDrE",
  authDomain: "comentarios-cabanas-quemchi.firebaseapp.com",
  projectId: "comentarios-cabanas-quemchi",
  storageBucket: "comentarios-cabanas-quemchi.firebasestorage.app",
  messagingSenderId: "1060434663957",
  appId: "1:1060434663957:web:9d9628f6a0cda9f4660c1c",
  measurementId: "G-CFHNHZBSMX",
};

// 3. Inicializa Firebase
// Esta línea inicializa la aplicación de Firebase. 
// Usamos getApps() para verificar si ya existe una instancia y evitar reinicializarla.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 4. Inicializa Cloud Firestore y obtén una referencia al servicio
// Esto te permitirá interactuar con la base de datos de Firestore.
const db = getFirestore(app);

export { app, db };
