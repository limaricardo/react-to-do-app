import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "", //Coloque sua chave da api aqui
    authDomain: "", //Coloque seu dominio aqui
    projectId: "", //Coloque seu Id aqui
    storageBucket: "", //Coloque seu Bucket aqui
    messagingSenderId: "", //Coloque seu SenderID aqui
    appId: "" //Coloque seu appId aqui

  };
  
firebase.initializeApp(firebaseConfig)



export default firebase
