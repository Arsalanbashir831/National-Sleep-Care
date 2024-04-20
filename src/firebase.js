// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX19pP8Z6tOsgOy_zeL5s3kHeewQbnaco",
  authDomain: "nationalsleepcare.firebaseapp.com",
  projectId: "nationalsleepcare",
  storageBucket: "nationalsleepcare.appspot.com",
  messagingSenderId: "892261126111",
  appId: "1:892261126111:web:1a00fae3865c6298e23e6a",
  measurementId: "G-MK93F4EWL5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);    