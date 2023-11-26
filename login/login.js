import { getAuth, signInWithEmailAndPassword } from "../firebase.js";

const auth = getAuth();
const user = auth.currentUser;

if (user) {
    window.location.href = "/admin";
}

const loginForm = document.querySelector("#form");
const loginEmail = document.querySelector("#email");
const loginPassword = document.querySelector("#password");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginEmail.value;
    const password = loginPassword.value;
    signInWithEmailAndPassword(getAuth(), email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = "/admin";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
});
