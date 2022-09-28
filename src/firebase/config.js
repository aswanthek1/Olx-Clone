import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBjzoIa1kYg_aq6JHwTVvHgDS7d2XHDM4A",
    authDomain: "fir-f66a8.firebaseapp.com",
    projectId: "fir-f66a8",
    storageBucket: "fir-f66a8.appspot.com",
    messagingSenderId: "614796557282",
    appId: "1:614796557282:web:4853a9db6e9b75906457bb",
    measurementId: "G-3VVE67Y8YW"
  };

  export default firebase.initializeApp(firebaseConfig)