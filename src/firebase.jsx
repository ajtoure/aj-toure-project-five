import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyB04Dzt5TrUChNru_CDPh0a2_TQ_DMrFb4",
    authDomain: "aj-toure-project-five.firebaseapp.com",
    databaseURL: "https://aj-toure-project-five.firebaseio.com",
    projectId: "aj-toure-project-five",
    storageBucket: "aj-toure-project-five.appspot.com",
    messagingSenderId: "655412486290",
    appId: "1:655412486290:web:26c28583248600df12464b"
};

firebase.initializeApp(config);

export default firebase;