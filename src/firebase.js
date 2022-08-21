import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
  
const firebaseConfig = {
    apiKey: "AIzaSyCHALmUszDP38V8thOmvmO268ltd3-0aGc",
    authDomain: "phonenumberauthreact.firebaseapp.com",
    projectId: "phonenumberauthreact",
    storageBucket: "phonenumberauthreact.appspot.com",
    messagingSenderId: "915362587307",
    appId: "1:915362587307:web:d3c56a6b1290a9e8fa0dee"
  };
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};