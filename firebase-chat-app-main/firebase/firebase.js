import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBZO3Gf9_m2eDYddWuk6bH0JCmtAeYT7bE",
  authDomain: "fir-chat-app-abe2f.firebaseapp.com",
  projectId: "fir-chat-app-abe2f",
  storageBucket: "fir-chat-app-abe2f.appspot.com",
  messagingSenderId: "320101457815",
  appId: "1:320101457815:web:4cb63fff90a49911ebaed2"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);