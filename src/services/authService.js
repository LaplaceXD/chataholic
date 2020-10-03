import firebase from "firebase/app";
import config from "../environment/environment";
import "firebase/auth";

firebase.initializeApp(config);

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

function signInWithGoogle() {
    return auth.signInWithPopup(googleProvider);
}

function signOut() {
    return auth.signOut();
}

export default {
    auth,
    signInWithGoogle,
    signOut,
};
