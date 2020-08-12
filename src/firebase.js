import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC94WtvPOybvsYOUCjDP45JqyiCD4fUgZA",
    authDomain: "aj-toure-project5.firebaseapp.com",
    databaseURL: "https://aj-toure-project5.firebaseio.com",
    projectId: "aj-toure-project5",
    storageBucket: "aj-toure-project5.appspot.com",
    messagingSenderId: "901536032583",
    appId: "1:901536032583:web:46d4905b00254fe21ece62"
}

firebase.initializeApp(config)

export default firebase;