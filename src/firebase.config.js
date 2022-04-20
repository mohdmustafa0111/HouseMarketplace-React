// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9M6i7DEKAuqy8oSh-MGkSig4LeBJASq0",
  authDomain: "house-marketplace-app-5ca1b.firebaseapp.com",
  projectId: "house-marketplace-app-5ca1b",
  storageBucket: "house-marketplace-app-5ca1b.appspot.com",
  messagingSenderId: "331153703825",
  appId: "1:331153703825:web:41786782b547bbf0a4d030",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
