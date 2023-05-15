import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5V9vx2iZzqly41PlGAEXE7Nr9Dsnz5Z4",
    authDomain: "ezmoney-2466e.firebaseapp.com",
    projectId: "ezmoney-2466e",
    storageBucket: "ezmoney-2466e.appspot.com",
    messagingSenderId: "228050282558",
    appId: "1:228050282558:web:e202f962b83937aac9096f",
    measurementId: "G-REHR2WTPZR"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);