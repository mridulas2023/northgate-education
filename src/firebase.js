import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration using environment variables
// In production, these should be set in a .env file (e.g., VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
let app;
let db;
let auth;

try {
  // Only initialize if we have a valid configuration (non-placeholder)
  if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY") {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
    console.log("Firebase successfully initialized.");
  } else {
    console.warn("Firebase config placeholders detected. Firebase operations will be mocked until configured.");
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

/**
 * Saves a contact form submission to Firestore.
 * Fallbacks to a resolved promise (mocking success) if Firebase isn't configured.
 * @param {Object} data - The form data to save.
 */
export const saveContactSubmission = async (data) => {
  if (db) {
    try {
      const docRef = await addDoc(collection(db, "contact_submissions"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  } else {
    // If Firebase isn't configured, we simulate a network delay and resolve
    console.log("[Mock Firestore] Saving contact submission:", data);
    return new Promise((resolve) => setTimeout(resolve, 800));
  }
};

export { app, db, auth };
