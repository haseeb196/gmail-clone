
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAJ7cui9bIBg0u4x2vh1Zl9dN1mnz1cGuw",
  authDomain: "clone-acad5.firebaseapp.com",
  projectId: "clone-acad5",
  storageBucket: "clone-acad5.appspot.com",
  messagingSenderId: "1078744545215",
  appId: "1:1078744545215:web:a08863d3e9bc830b66930a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
