import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl1rPQn2GXZLCTP-mzU4IGJRN9be2JYbI",
  authDomain: "reminder-app-7c70a.firebaseapp.com",
  projectId: "reminder-app-7c70a",
  storageBucket: "reminder-app-7c70a.appspot.com",
  messagingSenderId: "97124768499",
  appId: "1:97124768499:web:b38af1ef9b034fcea77586",
  measurementId: "G-4VSG1C6J3M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
