import * as firebase from "firebase";
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCtSNPMzUykeAHweX6f0hsepuiAGHpYgLo",
    authDomain: "chatin-70ca1.firebaseapp.com",
    projectId: "chatin-70ca1",
    storageBucket: "chatin-70ca1.appspot.com",
    messagingSenderId: "316000016447",
    appId: "1:316000016447:web:5c9372dc425c9c1973808a"
  };

  let app;

  if(firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };