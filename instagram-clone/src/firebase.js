  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBiagedWb7QsDfXDMocjPoWfFMhf_7tnXc",
    authDomain: "instagram-clone-e1a28.firebaseapp.com",
    databaseURL: "https://instagram-clone-e1a28.firebaseio.com",
    projectId: "instagram-clone-e1a28",
    storageBucket: "instagram-clone-e1a28.appspot.com",
    messagingSenderId: "417176181294",
    appId: "1:417176181294:web:d149d6c44259cd73b9ddbf",
    measurementId: "G-7WJK590SJJ"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage, firebase };