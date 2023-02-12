import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  limit,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0UEdPlAoYHsqH5P6Y5nJjM1t5BodlUts",
  authDomain: "nextjs-9c407.firebaseapp.com",
  projectId: "nextjs-9c407",
  storageBucket: "nextjs-9c407.appspot.com",
  messagingSenderId: "876028274736",
  appId: "1:876028274736:web:8aaec9c62d6d0d922a65f5",
  measurementId: "G-V949LY1W8J",
};

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = "state_changed";
