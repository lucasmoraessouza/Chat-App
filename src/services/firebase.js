import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC06_e_7kVi49-PjP3jPZQ_xauaZncJwX4",
  authDomain: "chat-app-b3656.firebaseapp.com",
  projectId: "chat-app-b3656",
  storageBucket: "chat-app-b3656.appspot.com",
  messagingSenderId: "1093634407225",
  appId: "1:1093634407225:web:e7eb7cb1af43544d6546e8",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
