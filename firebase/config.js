import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFQvERWkeazQHQhZlVDZ-cFns8tWXy734",
  authDomain: "bca-kaksha.firebaseapp.com",
  projectId: "bca-kaksha",
  storageBucket: "bca-kaksha.appspot.com",
  messagingSenderId: "1054727554830",
  appId: "1:1054727554830:web:dae1f4e12e2765ad5ff95f",
  measurementId: "G-LHW45YYLJE",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
