// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLHqXpXry2pw9bPawofv4rp2Ys-F3wA2M",
  authDomain: "react-coder-191c8.firebaseapp.com",
  projectId: "react-coder-191c8",
  storageBucket: "react-coder-191c8.appspot.com",
  messagingSenderId: "183611686507",
  appId: "1:183611686507:web:9074eba56967833302fb2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
