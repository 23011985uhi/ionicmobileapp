import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebaseconfig";


// Initialise firebase from firebaseconfig
const app = initializeApp(firebaseConfig);


// Initialise Firebase Authentication and get a reference to export
export const auth = getAuth(app);