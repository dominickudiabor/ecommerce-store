import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAoiwzhjC7vzRxCM3lPkmoiudnJveZaQg",
    authDomain: "kudix-db.firebaseapp.com",
    databaseURL: "https://kudix-db.firebaseio.com",
    projectId: "kudix-db",
    storageBucket: "kudix-db.appspot.com",
    messagingSenderId: "939275238628",
    appId: "1:939275238628:web:4688075ab6db98514e00f1",
    measurementId: "G-SMXJR6CZWR"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;