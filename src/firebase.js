import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBkMRdM3g8fPl4ENHT213n-g1LhGwzHTUQ",
    authDomain: "nyaysabha.firebaseapp.com",
    projectId: "nyaysabha",
    storageBucket: "nyaysabha.appspot.com",
    messagingSenderId: "502421498712",
    appId: "1:502421498712:web:3e9828a0506b151e38d32d",
    measurementId: "G-WCR5B4JCXP"
  };

const fire = firebase.initializeApp(firebaseConfig);
export default fire;