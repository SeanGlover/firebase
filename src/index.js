import {
    txtEmail,
    txtPassword,
    btnSignin,
    btnSignup,
    showSigninError,
    lnkForgotPwd,
    showFormSection,
    showSigninSection,
    hideSigninError,
    showSigninState,
    showSigninForm,
    showApp,
    btnSignout
} from './ui';
// import './styles.css';

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

//#region auth / Signin
const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099');
onAuthStateChanged(auth, user => {
    if(user!=null) {
        console.log('logged in!');
    }
    else {
        console.log(': ( ...log in failed');
    }
})

const SigninEmailPassword = async () => {
  const SigninEmail = txtEmail.value;
  const SigninPassword = txtPassword.value;
  try {
      const signin = await signInWithEmailAndPassword(auth, SigninEmail, SigninPassword);
      showFormSection(signin);
      try {
        const reportsCollection = collection(db, 'reports');
        const snapshot = await getDocs(reportsCollection);
      //   snapshot.forEach(doc=>{
      //     alert(doc.get('comments'));
      //   });
      //   const docData = {
      //       stringExample: "Hello world!",
      //       booleanExample: true,
      //       numberExample: 3.14159265,
      //       dateExample: new Date("December 10, 1815"),
      //       arrayExample: [5, true, "hello"],
      //       nullExample: null,
      //       objectExample: {
      //           a: 5,
      //           b: {
      //               nested: "foo"
      //           }
      //       }
      //     };
      //   alert(JSON.stringify(docData));
      //   alert(reportsCollection.path);
      //   const docTest = await addDoc(reportsCollection, docData, auth.currentUser.uid);
      }
      catch (e) {
        alert("Error adding document: " + e);
        console.error("Error adding document: ", e);
      }
  }
  catch (error) {
      showSigninError(error);
  }
};
btnSignin.addEventListener('click', SigninEmailPassword);

const createAccount = async () => {
    const SigninEmail = txtEmail.value;
    const SigninPassword = txtPassword.value;
    try {
        const signup = await createUserWithEmailAndPassword(auth, SigninEmail, SigninPassword);
        showFormSection(signup);
    }
    catch (error) {
        alert('error creating acct');
    }
};
btnSignup.addEventListener('click', createAccount);
//#endregion

import { getFirestore, collection, getDocs, getDoc, doc, addDoc, setDoc } from 'firebase/firestore'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js
const db = getFirestore(app);
const forgotPassword = async () => {
  try {
    // const reportsCollection = collection(db, 'reports');
    // const snapshot = await getDocs(reportsCollection);
    // const docData = {
    //     stringExample: "Hello world!",
    //     booleanExample: true,
    //     numberExample: 3.14159265,
    //     dateExample: new Date("December 10, 1815"),
    //     arrayExample: [5, true, "hello"],
    //     nullExample: null,
    //     objectExample: {
    //         a: 5,
    //         b: {
    //             nested: "foo"
    //         }
    //     }
    //   };
    // alert(JSON.stringify(docData));
    // alert(reportsCollection.path);
    // const docTest = await addDoc(reportsCollection, docData);
  }
  catch (e) {
    alert("Error adding document: " + e);
    // console.error("Error adding document: ", e);
  }
};
lnkForgotPwd.addEventListener('click', forgotPassword);
