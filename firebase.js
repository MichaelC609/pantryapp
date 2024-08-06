// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4pRab221oXlBou1Rd8K7Ye4ilvNPmtgk",
  authDomain: "inventory-management-ec1ab.firebaseapp.com",
  projectId: "inventory-management-ec1ab",
  storageBucket: "inventory-management-ec1ab.appspot.com",
  messagingSenderId: "326215165058",
  appId: "1:326215165058:web:d65eed21f3276279c6c09b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
export {firestore}