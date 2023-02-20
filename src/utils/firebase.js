// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5ZQZF0Z1wmjrNodeCIriT8W66HpvoYcs",
  authDomain: "react-native-sber.firebaseapp.com",
  projectId: "react-native-sber",
  storageBucket: "react-native-sber.appspot.com",
  messagingSenderId: "885450750442",
  appId: "1:885450750442:web:5a155f23f374a737671a93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const login = ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

export const db = getFirestore();
