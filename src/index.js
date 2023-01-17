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

import { getFirestore, collection, getDocs, getDoc, doc, setDoc } from 'firebase/firestore'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js
const db = getFirestore(app);
// const todosColl = collection(db, 'todos');
// const snapshot = await getDocs(todosColl);

try {
  const docRef = await addDoc(collection(db, 'reports'), {
    "Serials": {
      "41752 Rainbow Bumpas- Set Of 3": [
        "N° 535"
      ],
      "21098RO Sensory Magic": [
        "N° 992"
      ],
      "41671 Maxi Bubble Tube Chassis Slim Profile": [
        "N° 10601657"
      ],
      "41148 Wireless Controller": [
        "N° 3752"
      ],
      "41541 Interative Light Engine": [
        "N° 10877"
      ],
      "42090 Ust Projector": [
        "N° Q7C6150HAAAAB0140"
      ],
      "37969 Laser Stars™": [
        "N° 114308_jan2022"
      ],
      "41655 Wi Fi Color Wall Controller": [
        "N° 1987"
      ],
      "21001R Wifi Led Furniture Cube": [
        "N° 1312"
      ],
      "22870R Sound To Sight Showtime Panel": [
        "N° 10642603"
      ],
      "22873R Color Catch Combo Panel": [
        "N° 10642807"
      ]
    },
    "Trained": {
      "Names": [
        "? in lieu of Nadine"
      ],
      "Products": {
        "37969": "Laser Stars™",
        "41148": "Wireless Controller",
        "41576": "Maxi Bubble Tube",
        "41655": "Wi Fi Color Wall Controller",
        "41671": "Maxi Bubble Tube Chassis Slim Profile",
        "41752": "Rainbow Bumpas- Set Of 3",
        "41838": "Acrylic Mirror- L96\" X W48\"",
        "42090": "Ust Projector",
        "42248": "Univ Flat Wall Mtn For 10-24 In Display",
        "21098RO": "Sensory Magic",
        "21001R": "Wifi Led Furniture Cube",
        "22870R": "Sound To Sight Showtime Panel",
        "22873R": "Color Catch Combo Panel"
      }
    },
    "Comments": "Client will add electrical for the projector / wall washer after-the-fact",
    "Issues": "Wall washer requires adjustment as per below instructions... \r\n● Repeatedly press the “MODE” button on the wall washer until the display on the back of the wall washer displays “Addr.”\r\n● Now repeatedly press the “SET UP” button until the display shows “d.001” (or similar number).\r\n● Press “UP” and “DOWN” until the display shows “d.001”. Now press the “SET UP” button once.\r\n● Use the “UP” and “DOWN” buttons to select “03C.H”"
});
  alert("Document written with ID: ", docRef.id);
  // console.log();
}
catch (e) {
  alert("Error adding document: ");
  // console.error("Error adding document: ", e);
}

// await setDoc(doc(db, "reports", "centreLeCap"), {
//         "Serials": {
//           "41752 Rainbow Bumpas- Set Of 3": [
//             "N° 535"
//           ],
//           "21098RO Sensory Magic": [
//             "N° 992"
//           ],
//           "41671 Maxi Bubble Tube Chassis Slim Profile": [
//             "N° 10601657"
//           ],
//           "41148 Wireless Controller": [
//             "N° 3752"
//           ],
//           "41541 Interative Light Engine": [
//             "N° 10877"
//           ],
//           "42090 Ust Projector": [
//             "N° Q7C6150HAAAAB0140"
//           ],
//           "37969 Laser Stars™": [
//             "N° 114308_jan2022"
//           ],
//           "41655 Wi Fi Color Wall Controller": [
//             "N° 1987"
//           ],
//           "21001R Wifi Led Furniture Cube": [
//             "N° 1312"
//           ],
//           "22870R Sound To Sight Showtime Panel": [
//             "N° 10642603"
//           ],
//           "22873R Color Catch Combo Panel": [
//             "N° 10642807"
//           ]
//         },
//         "Trained": {
//           "Names": [
//             "? in lieu of Nadine"
//           ],
//           "Products": {
//             "37969": "Laser Stars™",
//             "41148": "Wireless Controller",
//             "41576": "Maxi Bubble Tube",
//             "41655": "Wi Fi Color Wall Controller",
//             "41671": "Maxi Bubble Tube Chassis Slim Profile",
//             "41752": "Rainbow Bumpas- Set Of 3",
//             "41838": "Acrylic Mirror- L96\" X W48\"",
//             "42090": "Ust Projector",
//             "42248": "Univ Flat Wall Mtn For 10-24 In Display",
//             "21098RO": "Sensory Magic",
//             "21001R": "Wifi Led Furniture Cube",
//             "22870R": "Sound To Sight Showtime Panel",
//             "22873R": "Color Catch Combo Panel"
//           }
//         },
//         "Comments": "Client will add electrical for the projector / wall washer after-the-fact",
//         "Issues": "Wall washer requires adjustment as per below instructions... \r\n● Repeatedly press the “MODE” button on the wall washer until the display on the back of the wall washer displays “Addr.”\r\n● Now repeatedly press the “SET UP” button until the display shows “d.001” (or similar number).\r\n● Press “UP” and “DOWN” until the display shows “d.001”. Now press the “SET UP” button once.\r\n● Use the “UP” and “DOWN” buttons to select “03C.H”"
//   });
