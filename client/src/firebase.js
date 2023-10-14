// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4.firebaseapp.com",
  projectId: "mern-estate-4",
  storageBucket: "mern-estate-4.appspot.com",
  messagingSenderId: "210390267328",
  appId: "1:210390267328:web:9d42ec0b461629769ac425"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);