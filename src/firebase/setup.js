// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6KHw3pk49TFDfp9Rqm_xY0WnBLPhgB4o",
  authDomain: "dever-baucua.firebaseapp.com",
  databaseURL: "https://dever-baucua-default-rtdb.firebaseio.com",
  projectId: "dever-baucua",
  storageBucket: "dever-baucua.appspot.com",
  messagingSenderId: "27804039361",
  appId: "1:27804039361:web:cbe32cbaf5655463047c40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
//new
