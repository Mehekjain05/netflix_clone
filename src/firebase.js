import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqbc1tObLT9VDZpoKEY87v8OoEw-eZEM0",
  authDomain: "netflix-clone-907f2.firebaseapp.com",
  projectId: "netflix-clone-907f2",
  storageBucket: "netflix-clone-907f2.appspot.com",
  messagingSenderId: "998477042646",
  appId: "1:998477042646:web:97241960533c9d6ff58a77",
  measurementId: "G-8JNC02ZVFL"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { auth };
export default db;

