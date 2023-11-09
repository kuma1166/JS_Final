// Firebaseの定義
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase, ref, query, push, set, onChildAdded, remove, onChildRemoved, orderByChild, equalTo, get, child, getFirestore }
from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBQPqJD2lVSo4hn-uoTEc01lvxMx9XHfzI",
    authDomain: "gsdemo-3437d.firebaseapp.com",
    databaseURL: "https://gsdemo-3437d-default-rtdb.firebaseio.com",
    projectId: "gsdemo-3437d",
    storageBucket: "gsdemo-3437d.appspot.com",
    messagingSenderId: "634231929398",
    appId: "1:634231929398:web:226263c6636791ce93b697"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app); //FirestoreDBに接続
  const dbRef = ref(db, "comics"); //FirestoreDB内の"comics"を使う

  console.log(db);
