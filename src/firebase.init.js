// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYqELAZzTlo8tx1xy5R5bbZ9hbEVcZ8-E",
    authDomain: "compitetive-programmer-trainer.firebaseapp.com",
    projectId: "compitetive-programmer-trainer",
    storageBucket: "compitetive-programmer-trainer.appspot.com",
    messagingSenderId: "276835514164",
    appId: "1:276835514164:web:8775d0eced596d65c39761"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;