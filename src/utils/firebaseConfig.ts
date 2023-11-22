import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyACxfCXxmdJAhIbtoWTAwQhB-S_w2NZbqQ",
  authDomain: "directy.firebaseapp.com",
  projectId: "directy",
  storageBucket: "directy.appspot.com",
  messagingSenderId: "166788617017",
  appId: "1:166788617017:web:2ae5c764db149353924ee8",
};

export const firebase = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(firebase);
