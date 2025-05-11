// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmLINKTlVAki7GVprNiVF-m30yvKbc9jY",
    authDomain: "boat-safe-system.firebaseapp.com",
    projectId: "boat-safe-system",
    storageBucket: "boat-safe-system.firebasestorage.app",
    messagingSenderId: "459240538181",
    appId: "1:459240538181:web:054097b5cee3d98a13e32c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
