import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage'
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyAI0ZANroJXwfmoKx7DtT_lvODg80q32eo",
  authDomain: "thirdeyenewsfeed.firebaseapp.com",
  databaseURL: "https://thirdeyenewsfeed.firebaseio.com",
  projectId: "thirdeyenewsfeed",
  storageBucket: "thirdeyenewsfeed.appspot.com",
  messagingSenderId: "168092929872",
  appId: "1:168092929872:web:7824bb2d7eedd4f419a655",
  measurementId: "G-VXSHP5R8S4"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({}); 
firebase.auth()
//const storage = 
firebase.storage();
//export {firebase,storage as default}; 
export default firebase; 