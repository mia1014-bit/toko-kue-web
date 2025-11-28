// Import fungsi yang diperlukan dari SDK yang Anda butuhkan
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Konfigurasi Firebase dari proyek Anda
const firebaseConfig = {
  apiKey: "AIzaSyCz-_v9M2uCN8-VJjyxzS5JjPCdv8HmdZY",
  authDomain: "toko-kue-web.firebaseapp.com",
  projectId: "toko-kue-web",
  storageBucket: "toko-kue-web.appspot.com",
  messagingSenderId: "8492284264",
  appId: "1:8492284264:web:01dc12195d691da78f7edd",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
