import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDame2FYukj9D2aqBQkhD9EcRWLlfubCDM",
  authDomain: "fir-tutorial-752c7.firebaseapp.com",
  projectId: "fir-tutorial-752c7",
  storageBucket: "fir-tutorial-752c7.appspot.com",
  messagingSenderId: "88354013007",
  appId: "1:88354013007:web:4382376ca8a0382caf8f3a",
  measurementId: "G-9WPQZPEXHH",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
