import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi3f7SyD8UR9IiZoouwPCwxsTHXaUtoeo",
  authDomain: "chatapplication-with-cha-6ce66.firebaseapp.com",
  projectId: "chatapplication-with-cha-6ce66",
  storageBucket: "chatapplication-with-cha-6ce66.appspot.com",
  messagingSenderId: "697835316212",
  appId: "1:697835316212:web:f7ffbdb1928be929228fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);