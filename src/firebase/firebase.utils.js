import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey:'AIzaSyCAoiwzhjC7vzRxCM3lPkmoiudnJveZaQgS' ,
  authDomain: "kudix-db.firebaseapp.com",
  databaseURL: "https://kudix-db.firebaseio.com",
  projectId: "kudix-db",
  storageBucket: "kudix-db.appspot.com",
  messagingSenderId: "939275238628",
  appId: "1:939275238628:web:4688075ab6db98514e00f1",
  measurementId: "G-SMXJR6CZWR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error  creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
