import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "kudix-db.firebaseapp.com",
  databaseURL: "https://kudix-db.firebaseio.com",
  projectId: "kudix-db",
  storageBucket: "kudix-db.appspot.com",
  messagingSenderId: "939275238628",
  appId: "1:939275238628:web:4688075ab6db98514e00f1",
  measurementId: "G-SMXJR6CZWR",
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error  creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

 export const convertCollectionsSnapshopToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });
 return transformedCollection.reduce((accumulator,collection) => {
  accumulator[collection.title.toLowerCase()] = collection;

  return accumulator;
},{})
};

firebase.initializeApp(config);


export const getCurrentUser = () => {
  return new Promise ((resolve,reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    },reject)
  })
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

 export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
