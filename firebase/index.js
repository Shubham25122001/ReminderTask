import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7ZdVCRHJV_4yx2hZfW2N-C3t_5mZO9Ew",
  authDomain: "reminder-app-16ac3.firebaseapp.com",
  projectId: "reminder-app-16ac3",
  storageBucket: "reminder-app-16ac3.appspot.com",
  messagingSenderId: "749368436075",
  appId: "1:749368436075:web:d4f41c6dd1a3fba7ea582e",
  measurementId: "G-4VSG1C6J3M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
