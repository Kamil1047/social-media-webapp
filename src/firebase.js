import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0CT2ZyO26_DzQbVoiQ06q-JVOOf29KO0",
  authDomain: "social-media-webapp-d53df.firebaseapp.com",
  projectId: "social-media-webapp-d53df",
  storageBucket: "social-media-webapp-d53df.appspot.com",
  messagingSenderId: "315729801622",
  appId: "1:315729801622:web:c32b802ab84380d5222db7",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
