import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBLpIxnufDRgyPJUTAfUCNslQRsLmB-58",
  authDomain: "auth-developement-fa3f8.firebaseapp.com",
  databaseURL: "https://auth-developement-fa3f8-default-rtdb.firebaseio.com",
  projectId: "auth-developement-fa3f8",
  storageBucket: "auth-developement-fa3f8.appspot.com",
  messagingSenderId: "144172930182",
  appId: "1:144172930182:web:ad90fe8e9ef8f4a217ad07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
