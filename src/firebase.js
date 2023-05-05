import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDNi7nNavMun1Sged5ciprt_kPi2r-mPPY",
  authDomain: "snapchat-clone-98e3c.firebaseapp.com",
  projectId: "snapchat-clone-98e3c",
  storageBucket: "snapchat-clone-98e3c.appspot.com",
  messagingSenderId: "819299703159",
  appId: "1:819299703159:web:dd2f2f0b71879269986972",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
