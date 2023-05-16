// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTkY31z-1AkjHnOP9qsDGHSz5z1bi4Ed0",
  authDomain: "fanatech.firebaseapp.com",
  projectId: "fanatech",
  storageBucket: "fanatech.appspot.com",
  messagingSenderId: "471877723905",
  appId: "1:471877723905:web:f170cc9352b0972cc09d00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;