// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALI-G_VuKiNYoIOam-IYvpCLSSrtrjvbg",
  authDomain: "crwn-clothing-db-7fbd3.firebaseapp.com",
  projectId: "crwn-clothing-db-7fbd3",
  storageBucket: "crwn-clothing-db-7fbd3.appspot.com",
  messagingSenderId: "344744813332",
  appId: "1:344744813332:web:e18d7ad8c9ba57fe0bd801",
};

// Initialize Firebase (singleton)
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// both are singleton
export const auth = getAuth();
export const db = getFirestore();

export const addCollectionAndDocument = async (key, objsToAdd, field) => {
  const collectionRef = collection(db, key);
  const batch = writeBatch(db);

  objsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj[field].toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
};

export const signInWithGooglePopup = async () => {
  return await signInWithPopup(auth, googleProvider);
};
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};
export const signInWithAuthUser = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);

  if (response) {
    const userDocRef = doc(db, "users", response.user.uid);
    const userSnapshot = await getDoc(userDocRef);

    response.user.displayName = userSnapshot.get("displayName");
  }

  return response;
};

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error("Failed to store user data", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const converErrorMessage = (error) => {
  return error.message
    .replace("Firebase: ", "")
    .replace(error.code, "")
    .replace("()", "")
    .replace(" .", ".");
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
