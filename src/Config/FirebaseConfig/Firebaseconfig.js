// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClF7nRpareLKpceYFNb8wsWOoK8Yd2SuU",
  authDomain: "quiz-admin-e80db.firebaseapp.com",
  projectId: "quiz-admin-e80db",
  storageBucket: "quiz-admin-e80db.appspot.com",
  messagingSenderId: "244867693062",
  appId: "1:244867693062:web:8fb8e25e244da801322187",
  measurementId: "G-PX9WD7Q65V"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);