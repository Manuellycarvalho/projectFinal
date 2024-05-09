// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBJdiGvYJkTYNPBtfZrsXEF7m7daPxook",
  authDomain: "fir-07-05-24.firebaseapp.com",
  projectId: "fir-07-05-24",
  storageBucket: "fir-07-05-24.appspot.com",
  messagingSenderId: "570614726625",
  appId: "1:570614726625:web:46cf38baa0680d14725ca0",
  measurementId: "G-GZLX06948V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);