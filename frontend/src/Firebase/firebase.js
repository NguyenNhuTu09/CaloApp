// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4udOcb20bnahFZFeSRcTCFjPxZ8ACjag",
  authDomain: "titfitness.firebaseapp.com",
  projectId: "titfitness",
  storageBucket: "titfitness.appspot.com",
  messagingSenderId: "666738431358",
  appId: "1:666738431358:web:77541a5a8658b19889cf2f",
  measurementId: "G-6RBN617LFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);