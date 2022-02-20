import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

// Make a function for initializing firebase
const firebaseInitialization = () => {
      initializeApp(firebaseConfig);
}

export default firebaseInitialization;