import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
import 'firebase/auth'
import firebase from 'firebase/app'

// const firebaseConfig = {
//     apiKey: "", //Coloque sua chave da api aqui
//     authDomain: "", //Coloque seu dominio aqui
//     projectId: "", //Coloque seu Id aqui
//     storageBucket: "", //Coloque seu Bucket aqui
//     messagingSenderId: "", //Coloque seu SenderID aqui
//     appId: "" //Coloque seu appId aqui
//   };


  
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log(user);
    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

firebase.auth().signInAnonymously()
  .then(() => {
    // Signed in..
    console.log("element");
  })
  .catch((error) => {
    console.log(error);
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

//   firebase.firestore().enablePersistence()
//   .catch((err) => {
//       if (err.code == 'failed-precondition') {
//           // Multiple tabs open, persistence can only be enabled
//           // in one tab at a a time.
//           // ...
//       } else if (err.code == 'unimplemented') {
//           // The current browser does not support all of the
//           // features required to enable persistence
//           // ...
//       }
//   });
// // Subsequent queries will use persistence, if it was enabled successfully

// firebase.firestore().disableNetwork()
// .then(() => {
//     // Do offline actions
//     // ...
// });

  

export default firebase
