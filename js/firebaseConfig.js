// firebaseConfig.js
// Modul untuk inisialisasi koneksi Firebase Firestore.
// NOTE: Isi nilai config dibawah sesuai project Firebase-mu.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyALQicUkO_A1FpNeHFsQkAj3geZHM8F5VY",
  authDomain: "input-nilai-mhs-83c4d.firebaseapp.com",
  projectId: "input-nilai-mhs-83c4d",
  storageBucket: "input-nilai-mhs-83c4d.firebasestorage.app",
  messagingSenderId: "1032645497445",
  appId: "1:1032645497445:web:18408c9108821441d26c8c",
  measurementId: "G-Q9RGS1PZZV",
};

// Inisialisasi Firebase App & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db agar dipakai module lain
export { db };