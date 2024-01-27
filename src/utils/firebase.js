// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBULGc2gMKbtOFwuzvLihd6GNJO7aMZpq0",
  authDomain: "netflixgpt-d0a05.firebaseapp.com",
  projectId: "netflixgpt-d0a05",
  storageBucket: "netflixgpt-d0a05.appspot.com",
  messagingSenderId: "719352630208",
  appId: "1:719352630208:web:e16b17392224560944d625",
  measurementId: "G-VW3YQWPDYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();