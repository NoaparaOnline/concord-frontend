import * as firebase from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";
import * as test  from "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKBlzBzAzCxvIrNuTGINJhLISPMY6edQ4",
  authDomain: "concordpharma-a4f9e.firebaseapp.com",
  projectId: "concordpharma-a4f9e",
  storageBucket: "concordpharma-a4f9e.appspot.com",
  messagingSenderId: "1013194291451",
  appId: "1:1013194291451:web:fbf28e57ba42048a94585e",
  measurementId: "G-M5GNYWNSSF"
});
const messaging = test.getMessaging(initializedFirebaseApp);
export { messaging , test};