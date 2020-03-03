import firebase from 'firebase/app';
import  'firebase/firestore';

const firestore = firebase.firestore();

/* the tree ways to query from the firebase database */

firestore.collection('users')
.doc('wwaEFVINsFhRxREBPe49')
.collection('cartItems')
.doc('HUPmzNUiigJWQkBQ1LiH');

firestore.doc('/users/wwaEFVINsFhRxREBPe49/cartItems/HUPmzNUiigJWQkBQ1LiH');

firestore.doc('users/wwaEFVINsFhRxREBPe49/cartItems');