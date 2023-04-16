/*
* This file contains the database config 
*/
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Config for firebase
const firebaseConfig = {
  apiKey: "AIzaSyD5vXOA388DnaidmZn4dsDQXkR_OJ1de8I",
  authDomain: "protekc-4e239.firebaseapp.com",
  databaseURL: "https://protekc-4e239-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "protekc-4e239",
  storageBucket: "protekc-4e239.appspot.com",
  messagingSenderId: "59455605688",
  appId: "1:59455605688:web:c1af48077c968cf7d31d4d"
};

// initialize firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)




