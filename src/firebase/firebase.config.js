// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2R8Y4i7muaNToKEcdRZ_q7oMgl2uieSg",
  authDomain: "job-portal-7c82a.firebaseapp.com",
  projectId: "job-portal-7c82a",
  storageBucket: "job-portal-7c82a.appspot.com",
  messagingSenderId: "497865862231",
  appId: "1:497865862231:web:518183ed7486d39102c712"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;