import firebase from "firebase";

const firebaseConfig = {
  apiKey:  process.env.FIREBASE_API_KEY,
  authDomain: "votatron-1b49d.firebaseapp.com",
  databaseURL: "https://votatron-1b49d.firebaseio.com",
  projectId: "votatron-1b49d",
  storageBucket: "votatron-1b49d.appspot.com",
  messagingSenderId: "162937967391",
  appId: "1:162937967391:web:af16f82b2abd8f24f6962a",
  measurementId: "G-3705LHC6MM"
};
firebase.initializeApp(firebaseConfig);

export  { firebaseConfig };
