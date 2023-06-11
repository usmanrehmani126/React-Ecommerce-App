// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getAuth} from "firebase/auth";
 import {getFirestore} from "firebase/firestore";
 import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCnWMlKe5zmLpD3vEpuD_H0DhvovrDS7Do",
  authDomain: "product-multimart.firebaseapp.com",
  projectId: "product-multimart",
  storageBucket: "product-multimart.appspot.com",
  messagingSenderId: "350395895003",
  appId: "1:350395895003:web:ff799eb5c5423193be90fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const storage=getStorage(app)
export default app;