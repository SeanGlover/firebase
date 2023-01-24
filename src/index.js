// import './styles.css';
// https://softauthor.com/category/firebase/
import {
    txtNameFirst,
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
import {
  square
} from './classes';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js
import { getAnalytics } from 'firebase/analytics'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-analytics.js
import { getAuth, onAuthStateChanged, connectAuthEmulator, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js
import { getDatabase, ref, get, update, set, child, query, orderByChild, startAt, endAt, onValue, equalTo, connectDatabaseEmulator} from "firebase/database";
import { getFirestore, collection, getDocs, getDoc, setDoc, addDoc, doc, connectFirestoreEmulator } from 'firebase/firestore'; // https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWRo09EIsgTaScFbtjRtbJ-awSX5ohAjk",
  authDomain: "ldmtf-28bed.firebaseapp.com",
  databaseURL: "https://ldmtf-28bed-default-rtdb.firebaseio.com",
  projectId: "ldmtf-28bed",
  storageBucket: "ldmtf-28bed.appspot.com",
  messagingSenderId: "683713139477",
  appId: "1:683713139477:web:0d369c00298612bd0f8f1c",
  measurementId: "G-DG4WLW9JJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dbReal = getDatabase(app);
const dbStore = getFirestore(app);
const analytics = getAnalytics(app);

// const { initializeAppCheck, ReCaptchaEnterpriseProvider } = require("firebase/app-check");
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaEnterpriseProvider('6Lf-NfUjAAAAAJFMraCWPxm_GNa34kEn9TBnxSCY'),
//   // Optional argument. If true, the SDK automatically refreshes App Check
//   // tokens as needed.
//   isTokenAutoRefreshEnabled: true
// });

//#region auth / Signin
connectAuthEmulator(auth, 'http://localhost:9099');
connectFirestoreEmulator(dbStore, 'http://localhost:8080');
connectDatabaseEmulator(dbReal, 'http://localhost:9000');

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
        // https://ldmtf-28bed-default-rtdb.firebaseio.com/
               
        // const email = ref(dbReal, 'users/' + '898e8bb8-6aa4-4e56-a9f7-a8d674ced769' + '/Email');
        // onValue(email, (snapshot) => {
        //   const data = snapshot.val();
        //   alert('hi');
        // });

        const reports = collection(dbStore, "reports");
        const newCityRef = doc(collection(dbStore, "cities"));
        const docRef = addDoc(collection(dbStore, "cities"), {
          name: "Berlin",
          country: "Germany"
        });
        console.log("Document written with ID: ", docRef.id);
        // await setDoc(doc(reports, "/owiIy4sh6msVPw56YPrK"), {
        //   comments: "San Francisco", feedback: "CA", issues: "USA"
        // });
        // var firebaseHeadingRef = dbReal.ref().child("Heading");

        // firebaseHeadingRef.on('value', function(datasnapshot) {
        //     heading.innerText = datasnapshot.val();
        // });

        // get(child(ref(dbReal, '/users/' + '898e8bb8-6aa4-4e56-a9f7-a8d674ced769'))).then((snapshot) => {
        //   if (snapshot.exists) {
        //     alert('yes');
        //   } else {
        //     console.log("No data available");
        //     alert('no');
        //   }
        // }).catch((error) => {
        //   alert(error);
        // });
        // alert('bye');

        //#region set user or report data *** WORKS
        // let uuid = self.crypto.randomUUID();
        // writeUserData('b49f183c-860a-4366-b08b-82fbbcedd7c7', 'Edgar', 'Poe', 'poe@gmail.com', '514-123-1234', 'Role.client');
        // writeUserData('898e8bb8-6aa4-4e56-a9f7-a8d674ced769', 'Frederick', 'Douglass', 'fred@gmail.com', '514-123-4567', 'Role.client');
        // writeUserData(uuid, 'Monkey', 'Bananas', 'mkyBananas@gmail.com', '514-123-4567', 'Role.admin');
        // alert(uuid);

        var skipCode = true;
        if(!skipCode) {
          alert('not skipping');
          const users = ref(dbReal, 'users/' + 'b49f183c-860a-4366-b08b-82fbbcedd7c7');
          onValue(users, (snapshot) => {
            const data = snapshot.val();
            alert(data.toString());
          });

          const reports = ref(dbReal, 'reports/' + 'd91c6b02-65db-4eca-995d-5f0405237732');
          onValue(reports, (snapshot) => {
            const data = snapshot.val();
            alert(data.toString());
          });
        }
        //#endregion
      }
      catch (e) {
        alert("uh hi... error: " + e);
      }
  }
  catch (error) {
    showSigninError(error);
  }
};
const createAccount = async () => {
  const SigninEmail = txtEmail.value;
  const SigninPassword = txtPassword.value;
  try {
      const signup = await createUserWithEmailAndPassword(auth, SigninEmail, SigninPassword);
      updateProfile(auth.currentUser, {
        displayName: txtNameFirst.value,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        // Profile updated!
        showFormSection(signup);
      }).catch((error) => {
        // An error occurred
        // ... alert()???
      });
  }
  catch (error) {
    showSigninError(error);
  }
};
const forgotPassword = async () => {
  try {
    // const reportsCollection = collection(dbStore, 'reports');
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

window.onload=function() {
  btnSignin.addEventListener('click', SigninEmailPassword);
  btnSignup.addEventListener('click', createAccount);
  lnkForgotPwd.addEventListener('click', forgotPassword);
}
//#endregion
function writeUserData(userId, nameFirst, nameLast, email, phoneNbr, role) {
  set(ref(dbReal, 'users/' + userId), {
    Id: userId,
    FirstName: nameFirst,
    LastName: nameLast,
    Email: email,
    Phone: phoneNbr,
    Role : role
  });
}
async function getData() {

  try {
    const dbRef = query(ref(dbReal, 'reports/id'), startAt('d91c6b02-65db-4eca-995d-5f0405237732'), endAt('d91c6b02-65db-4eca-995d-5f0405237732'));
    const last = await get(dbRef);
    alert(last);
  }
  catch(err) {
      alert(err);
  }

  const dbReports = ref(dbReal, "/reports");
  const queryConstraints = [orderByChild("Id"), equalTo("d91c6b02-65db-4eca-995d-5f0405237732")];
  const reportSnapshot = await get(query(dbReports));
  alert(dbReports.key);
  const report = await get(query(dbReports, ...queryConstraints));
  
  if (report.exists) {
    alert("found by Id", report.val());
  } else {
    alert("not found by Id");
  }

}