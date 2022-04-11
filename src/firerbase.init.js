// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZJJjNGgcpWkikeaBsv9i9kvGR85BgrWU",
  authDomain: "genius-car-services-8eeb2.firebaseapp.com",
  projectId: "genius-car-services-8eeb2",
  storageBucket: "genius-car-services-8eeb2.appspot.com",
  messagingSenderId: "939609306804",
  appId: "1:939609306804:web:4356029a97837ba32489e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;