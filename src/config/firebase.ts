// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApua2HpbXHebkyUcQsphwgBgmwBNXqZOo",
  authDomain: "our-list-a9b92.firebaseapp.com",
  projectId: "our-list-a9b92",
  storageBucket: "our-list-a9b92.firebasestorage.app",
  messagingSenderId: "34050506969",
  appId: "1:34050506969:web:3869e1630b61fe11857ec8",
  measurementId: "G-KYS3K5RFPC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);