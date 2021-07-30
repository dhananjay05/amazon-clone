// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0Y_0dvq7D6B71G7bOQbNO8S27Li1wJHo",
  authDomain: "clone-3f629.firebaseapp.com",
  projectId: "clone-3f629",
  storageBucket: "clone-3f629.appspot.com",
  messagingSenderId: "861819375252",
  appId: "1:861819375252:web:70539cd04b29b3a4276e81",
  measurementId: "G-7T2SQ8FXHD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };