import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCkC1wtb888skiSNqeCdpzQP40wO66rTGc",
    authDomain: "pentarivertechnologies-6fd54.firebaseapp.com",
    databaseURL:
        "https://pentarivertechnologies-6fd54-default-rtdb.firebaseio.com",
    projectId: "pentarivertechnologies-6fd54",
    storageBucket: "pentarivertechnologies-6fd54.appspot.com",
    messagingSenderId: "55988809377",
    appId: "1:55988809377:web:38c4f2b379504a9be10ae0",
    measurementId: "G-WHT6CJX73Z",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
