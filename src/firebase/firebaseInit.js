import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
// import {firebase} from 'firebase/app'
// import 'firebase/firestore'
// const firebaseApp = firebase.initalizeApp(firebaseConfig);
// export default firebaseApp.firestore();


const db = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export default getFirestore(db);