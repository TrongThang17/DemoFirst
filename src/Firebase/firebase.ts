import firebase  from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBdRpZwRltIVRI5DtYFglWg4D9kEr4NJ4g",
    authDomain: "testtodoapp-4d035.firebaseapp.com",
    projectId: "testtodoapp-4d035",
    storageBucket: "testtodoapp-4d035.appspot.com",
    messagingSenderId: "670859528510",
    appId: "1:670859528510:web:2fdefa4a3cda63f73bc46f",
    measurementId: "G-6LT7XZV8ZZ"
    
}
let app;
if(firebase.apps.length===0){
  app = firebase.initializeApp(firebaseConfig)
}else{
    app= firebase.app()
}
const auth = firebase.auth()
export {auth}