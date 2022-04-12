// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.envREACT_APPapiKey,
  authDomain:process.envREACT_APPauthDomain,
  projectId:process.envREACT_APPprojectId,
  storageBucket:process.envREACT_APPstorageBucket,
  messagingSenderId:process.envREACT_APPmessagingSenderId,
  appId:process.envREACT_APPappId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;