import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaEXtySt5jiwfHX3gxNor6TLyCTOuC2hs",
  authDomain: "devter-d573b.firebaseapp.com",
  projectId: "devter-d573b",
  storageBucket: "devter-d573b.appspot.com",
  messagingSenderId: "1078884809665",
  appId: "1:1078884809665:web:1acc19432d91e906b70d40",
  measurementId: "G-TEV9V2DV0G",
};

const app = initializeApp(firebaseConfig);

export const mapResultFromFirebaseAuthToUser = (user) => {
  const { email, photoURL, displayName, accessToken } = user;

  return {
    accessToken,
    email,
    photoURL,
    username: displayName,
  };
};

export const onGitHubAuthStateChanged = (callback) => {
  const auth = getAuth();

  return onAuthStateChanged(auth, (result) => {
    if (!result) return callback(null);

    const user = mapResultFromFirebaseAuthToUser(result);

    callback(user);
  });
};

export const loginWithGitHub = () => {
  const provider = new GithubAuthProvider();
  const auth = getAuth();

  return signInWithPopup(auth, provider);
};
