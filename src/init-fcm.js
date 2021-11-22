import * as firebase from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";
import * as test  from "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBy4eBIxA1GuGcK9TpcXf2FxJCAMUl3SHw",
  authDomain: "concordpharma-9d29f.firebaseapp.com",
  projectId: "concordpharma-9d29f",
  storageBucket: "concordpharma-9d29f.appspot.com",
  messagingSenderId: "966861684005",
  appId: "1:966861684005:web:f46b21a72cd690dea5aecc",
  measurementId: "G-0FTLTQJ0S7"
});
const messaging = test.getMessaging(initializedFirebaseApp);
export { messaging , test};