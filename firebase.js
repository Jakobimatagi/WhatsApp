import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBK7Jv_Tnmi6GUCAefGFiRLMk1_nkuASpU",
    authDomain: "whatsapp-clone-59296.firebaseapp.com",
    projectId: "whatsapp-clone-59296",
    storageBucket: "whatsapp-clone-59296.appspot.com",
    messagingSenderId: "984475606551",
    appId: "1:984475606551:web:305c86be79dc8661a40652"
  };



  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebases.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider};