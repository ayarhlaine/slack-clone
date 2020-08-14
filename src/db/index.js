import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC92NQlLBMdwRDjAoyEWLVzFwuqPLpKrs4",
    authDomain: "slack-clone-b7dfe.firebaseapp.com",
    databaseURL: "https://slack-clone-b7dfe.firebaseio.com",
    projectId: "slack-clone-b7dfe",
    storageBucket: "slack-clone-b7dfe.appspot.com",
    messagingSenderId: "247634981462",
    appId: "1:247634981462:web:8e9edefd97d6ad66e601f7"
};
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;