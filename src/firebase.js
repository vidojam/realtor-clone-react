// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuOFyO8D67alu_p2Ff7Kk9-Enz9MUAHR8",
  authDomain: "realtor-clone-react-49e80.firebaseapp.com",
  projectId: "realtor-clone-react-49e80",
  storageBucket: "realtor-clone-react-49e80.appspot.com",
  messagingSenderId: "770100014303",
  appId: "1:770100014303:web:30fc49c13d4bdfbb920d6a"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();