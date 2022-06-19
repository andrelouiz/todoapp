import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNU_DbV48OCNIjMVMdvnfFbgQWD2Eyusg",
  authDomain: "todolist-65d63.firebaseapp.com",
  projectId: "todolist-65d63",
  storageBucket: "todolist-65d63.appspot.com",
  messagingSenderId: "247268523138",
  appId: "1:247268523138:web:71a12fb2c93fbd3458889b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
