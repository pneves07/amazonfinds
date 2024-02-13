/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWyEYXPYag3jFD25q7aHEEphPomKogz78",
  authDomain: "finds-8b819.firebaseapp.com",
  databaseURL: "https://finds-8b819-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "finds-8b819",
  storageBucket: "finds-8b819.appspot.com",
  messagingSenderId: "830439771410",
  appId: "1:830439771410:web:84799f9c5e4cb4e03537cb",
  measurementId: "G-MXSXCTM06B"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;