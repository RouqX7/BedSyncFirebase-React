// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBM4YjeDFRx0c9zaplhifUWm1au7VF5JWk",
  authDomain: "bed-sync-web.firebaseapp.com",
  projectId: "bed-sync-web",
  storageBucket: "bed-sync-web.appspot.com",
  messagingSenderId: "664862699829",
  appId: "1:664862699829:web:976ca816cfbbddd7389c7c",
  measurementId: "G-M50HL79WKM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);