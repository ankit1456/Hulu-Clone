import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA0oJVBr4XJAvcBdhoSdpcpC4QlRkIpOis",
  authDomain: "hulu-clone-cp-22e80.firebaseapp.com",
  projectId: "hulu-clone-cp-22e80",
  storageBucket: "hulu-clone-cp-22e80.appspot.com",
  messagingSenderId: "110051245373",
  appId: "1:110051245373:web:c223880bc49bca74c61954",
  measurementId: "G-1GXDFP0Q4Y",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
