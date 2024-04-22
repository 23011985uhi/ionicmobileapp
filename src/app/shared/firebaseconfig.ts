import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyCSPexRN_gH4yG1Tl1tpF4W7FsD3fjUkIU",
  authDomain: "ionic-app-3e306.firebaseapp.com",
  databaseURL: "https://ionic-app-3e306-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ionic-app-3e306",
  storageBucket: "ionic-app-3e306.appspot.com",
  messagingSenderId: "795472618482",
  appId: "1:795472618482:web:e2313fcaa1f45dca1a416b"
};
 export const firebaseApp = initializeApp(firebaseConfig);