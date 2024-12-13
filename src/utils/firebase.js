// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCARPY89x-m-2lzgIVioC6wgJ-rKGqfeJ0",
  authDomain: "netflix-gpt-cb481.firebaseapp.com",
  projectId: "netflix-gpt-cb481",
  storageBucket: "netflix-gpt-cb481.firebasestorage.app",
  messagingSenderId: "303923161379",
  appId: "1:303923161379:web:4d73ebd22afcb36d114496",
  measurementId: "G-WHB9J94SLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();