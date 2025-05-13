import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAmLINKTlVAki7GVprNiVF-m30yvKbc9jY",
    authDomain: "boat-safe-system.firebaseapp.com",
    databaseURL:
        "https://boat-safe-system-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "boat-safe-system",
    storageBucket: "boat-safe-system.firebasestorage.app",
    messagingSenderId: "459240538181",
    appId: "1:459240538181:web:054097b5cee3d98a13e32c",
};

const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const database = getDatabase();

export { app, auth, database };
