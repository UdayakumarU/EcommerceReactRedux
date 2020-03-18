import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZbMOcghsV7M2nmUCNdhglO0cMQHwgOC8",
    authDomain: "crownshopping-db.firebaseapp.com",
    databaseURL: "https://crownshopping-db.firebaseio.com",
    projectId: "crownshopping-db",
    storageBucket: "crownshopping-db.appspot.com",
    messagingSenderId: "741931211835",
    appId: "1:741931211835:web:e6f46173b3c08d91c2101e",
    measurementId: "G-QWYFS88ZZ0"
  };

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
  const userRef =  firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exist){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;