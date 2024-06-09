// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ77l5jJYnXfn4VBZbgRcgpLhIi7HcuJk",
  authDomain: "netflixgpt-67cb6.firebaseapp.com",
  projectId: "netflixgpt-67cb6",
  storageBucket: "netflixgpt-67cb6.appspot.com",
  messagingSenderId: "922342243907",
  appId: "1:922342243907:web:9b61df77b886b26a241ef6",
  measurementId: "G-03PVM0CVRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();