// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFfAkEuHemTlv81VXX2pv_J9wELXDBiak",
  authDomain: "croseta-buna.firebaseapp.com",
  projectId: "croseta-buna",
  storageBucket: "croseta-buna.firebasestorage.app",
  messagingSenderId: "837231330428",
  appId: "1:837231330428:web:a114c4514b0da6f80775f9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

