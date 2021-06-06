// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKexCpaWb9Kcu1APq2npoap2eo7HWVtUQ",
  authDomain: "kr-tradings-fbfcb.firebaseapp.com",
  projectId: "kr-tradings-fbfcb",
  storageBucket: "kr-tradings-fbfcb.appspot.com",
  messagingSenderId: "1068518187",
  appId: "1:1068518187:web:b92ed791ac46891638536e",
  measurementId: "G-Q6Z5SHS4MQ",
});

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();

export { db, storage };
