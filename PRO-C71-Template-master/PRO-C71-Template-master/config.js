import firebase from "firebase";
require("@firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyCeRADVm4CfZ5GVldnNe7s9eq8-mXwu4cg",
    authDomain: "p-71-c9113.firebaseapp.com",
    projectId: "p-71-c9113",
    storageBucket: "p-71-c9113.appspot.com",
    messagingSenderId: "46246791846",
    appId: "1:46246791846:web:58e0254910b6e695e0c267"
  };
//Paste your firebaseConfig here

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
