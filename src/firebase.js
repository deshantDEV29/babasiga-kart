import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3xK-Jj_sFWcEFKfQt9HfFhmmC3zQ69kY",
  authDomain: "babasiga-kart.firebaseapp.com",
  projectId: "babasiga-kart",
  storageBucket: "babasiga-kart.appspot.com",
  messagingSenderId: "801408209940",
  appId: "1:801408209940:web:27688d48740ce59144c301"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}