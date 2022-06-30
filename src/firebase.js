import firebase from "firebase/app";
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD56UKA9vvqjuknb_JRogrYNj3tyXI7C8k",
  authDomain: "reactwebapp-ca1ee.firebaseapp.com",
  projectId: "reactwebapp-ca1ee",
  storageBucket: "reactwebapp-ca1ee.appspot.com",
  messagingSenderId: "77618395073",
  appId: "1:77618395073:web:8103c8e6bb3e39441fa140",
  measurementId: "G-4N9R7B25B6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
