// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  signInWithPopup(auth, googleProvider);
}
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
}

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
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
