// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';
// import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAOFY37ivvdHrDb8H5GLvm1Q0QqKSTZSjw",
  authDomain: "stickerbear-b1c07.firebaseapp.com",
  projectId: "stickerbear-b1c07",
  storageBucket: "stickerbear-b1c07.appspot.com",
  messagingSenderId: "966101444963",
  appId: "1:966101444963:web:824cefc1c4e1dd88d14b56",
};


// Initialize Firebase
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }
var app;
export const initFirebase = () => {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}
export var analytics;
// export default firebase;