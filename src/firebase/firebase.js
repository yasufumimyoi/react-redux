import * as firebase from "firebase";

var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
