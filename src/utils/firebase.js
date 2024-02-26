// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfkwoi3GiVe37-BMwNRf3K2lwee2obao4",
  authDomain: "netflixgpt-9fc3f.firebaseapp.com",
  projectId: "netflixgpt-9fc3f",
  storageBucket: "netflixgpt-9fc3f.appspot.com",
  messagingSenderId: "471043798656",
  appId: "1:471043798656:web:5906cdded044244131d865",
  measurementId: "G-6RVKTH70VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()