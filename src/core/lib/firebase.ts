import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOe8r1m4w31TcA8TGB0ilA7YGpTAGRiwo",
  authDomain: "meli-4d80c.firebaseapp.com",
  projectId: "meli-4d80c",
  storageBucket: "meli-4d80c.firebasestorage.app",
  messagingSenderId: "277778498571",
  appId: "1:277778498571:web:ba63cdbe53f4f3c239730e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
