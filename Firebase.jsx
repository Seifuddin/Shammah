// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics"; // Optional, only works in browser not SSR

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9dF7szt919giEJjZtq_WznE_s77q5uqY",
  authDomain: "jccm-d4ef3.firebaseapp.com",
  projectId: "jccm-d4ef3",
  storageBucket: "jccm-d4ef3.appspot.com",  // ⚡ corrected `.app` to `.appspot.com`
  messagingSenderId: "492761159876",
  appId: "1:492761159876:web:7fa20e8907d7527e495191",
  measurementId: "G-J4NEMFN7T9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);

// Optional: Only initialize analytics on client side
// let analytics;
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }
// export { analytics };
