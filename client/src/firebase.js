// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c0215.firebaseapp.com",
  projectId: "mern-blog-c0215",
  storageBucket: "mern-blog-c0215.appspot.com",
  messagingSenderId: "516394009877",
  appId: "1:516394009877:web:0c043f0a13d0569040551c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
