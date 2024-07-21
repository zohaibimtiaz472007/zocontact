// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp8zQSWBaxV-hdFk39Q5WQ1Dmi9xKO3uY",
  authDomain: "contact-app-3ba36.firebaseapp.com",
  projectId: "contact-app-3ba36",
  storageBucket: "contact-app-3ba36.appspot.com",
  messagingSenderId: "1063399546200",
  appId: "1:1063399546200:web:c67bc3bf2c94dfdc90992d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

