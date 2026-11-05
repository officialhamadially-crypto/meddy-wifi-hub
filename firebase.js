// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTr8e49ANXXCa7JYGPHVcyltkZeafLAlM",
  authDomain: "meddy-wifi-hub.firebaseapp.com",
  projectId: "meddy-wifi-hub",
  storageBucket: "meddy-wifi-hub.firebasestorage.app",
  messagingSenderId: "804179288812",
  appId: "1:804179288812:web:447e1df4ad6fd96de4fbc9",
  measurementId: "G-ZGH4SK0NFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);