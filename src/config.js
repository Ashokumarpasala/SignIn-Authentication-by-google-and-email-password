// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLlYsPCgPBkjiXLmN5HUiadLB7USCmbbY",
  authDomain: "emailauthentication-f4cf0.firebaseapp.com",
  projectId: "emailauthentication-f4cf0",
  storageBucket: "emailauthentication-f4cf0.appspot.com",
  messagingSenderId: "269075420497",
  appId: "1:269075420497:web:56db4f508e2c7f33906f70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;