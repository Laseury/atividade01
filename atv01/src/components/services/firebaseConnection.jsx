//Coloque isso no terminal: npm install firebase

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBChXCCYVxppEKGLYIj2FlYJS2k2zXrILM",
  authDomain: "corpcapsula-8c1d1.firebaseapp.com",
  projectId: "corpcapsula-8c1d1",
  storageBucket: "corpcapsula-8c1d1.appspot.com",
  messagingSenderId: "558464804028",
  appId: "1:558464804028:web:61f7642f0f8ada6f435cb9"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export {db}