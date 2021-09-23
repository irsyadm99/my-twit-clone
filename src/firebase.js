import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3mZ_09wbWa7KEfv-YnYAEoYltrIcBrj4",
  authDomain: "twit-clone-5264d.firebaseapp.com",
  projectId: "twit-clone-5264d",
  storageBucket: "twit-clone-5264d.appspot.com",
  messagingSenderId: "958022979318",
  appId: "1:958022979318:web:7200e5b0df1025fb86e6d7",
  measurementId: "G-88JCH0C156",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
