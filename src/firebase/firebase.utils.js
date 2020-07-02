import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config ={
    apiKey: "AIzaSyD1O9DHczIKmY57FHoP39g71V10ahD4nZ0",
    authDomain: "shoppin-appl.firebaseapp.com",
    databaseURL: "https://shoppin-appl.firebaseio.com",
    projectId: "shoppin-appl",
    storageBucket: "shoppin-appl.appspot.com",
    messagingSenderId: "70278545991",
    appId: "1:70278545991:web:2b1d56d99c81cc19b06762",
    measurementId: "G-7QM05YESQL"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;