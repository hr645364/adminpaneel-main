// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB3JvQDYGNsxydu1GGZEslCjiRBNg61JE",
  authDomain: "dashboard-13b24.firebaseapp.com",
  databaseURL: "https://dashboard-13b24-default-rtdb.firebaseio.com",
  projectId: "dashboard-13b24",
  storageBucket: "dashboard-13b24.appspot.com",
  messagingSenderId: "549685409378",
  appId: "1:549685409378:web:e8ce72023841c64a07833b",
  measurementId: "G-2YB85887KJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
