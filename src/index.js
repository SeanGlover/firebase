import './styles.css';
import {
    txtEmail,
    txtPassword,
    btnLogin,
    btnSignup,
    showLoginError,
    hideLoginError,
    showLoginState,
    showLoginForm,
    showApp,
    btnLogout
} from './ui';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js
import { getAnalytics } from 'firebase/analytics'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWRo09EIsgTaScFbtjRtbJ-awSX5ohAjk",
    authDomain: "ldmtf-28bed.firebaseapp.com",
    projectId: "ldmtf-28bed",
    storageBucket: "ldmtf-28bed.appspot.com",
    messagingSenderId: "683713139477",
    appId: "1:683713139477:web:0d369c00298612bd0f8f1c",
    measurementId: "G-DG4WLW9JJF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
    getAuth,
    onAuthStateChanged,
    connectAuthEmulator,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from 'firebase/auth'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js
const auth = getAuth(app);
onAuthStateChanged(auth, user => {
    if(user!=null) {
        console.log('logged in!');
    }
    else {
        console.log(': ( ...log in failed');
    }
})
connectAuthEmulator(auth, 'http://localhost:9099');

const db = getFirestore(app);
// const todosColl = collection(db, 'todos');
// const snapshot = await getDocs(todosColl);

const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;
    try {
        const signin = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        alert(`login succeeded for: ${loginEmail}`);
    }
    catch (error) {
        showLoginError(error);
    }
};
btnLogin.addEventListener('click', loginEmailPassword);

const createAccount = async () => {
    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;
    try {
        const signup = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        alert('acct created');
    }
    catch (error) {
        alert('error creating acct');
    }
};
btnSignup.addEventListener('click', createAccount);
