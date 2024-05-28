import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyD0HPGiZ1Q8Sz72OG3ilmZ2vvWhE9MVffw",
    authDomain: "taller1-amii-e4b05.firebaseapp.com",
    projectId: "taller1-amii-e4b05",
    storageBucket: "taller1-amii-e4b05.appspot.com",
    messagingSenderId: "982478926337",
    appId: "1:982478926337:web:6d2e2707ffe052fb6ac600"
  };
  
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)
export const storage = getStorage(app)