import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCwfZ5D0C85X3h9qv40lN3pzy5KN3JFfMw",
    authDomain: "epi-note-7f014.firebaseapp.com",
    projectId: "epi-note-7f014",
    storageBucket: "epi-note-7f014.appspot.com",
    messagingSenderId: "544610162443",
    appId: "1:544610162443:web:9117f6d7c1b3b92a18740e"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;