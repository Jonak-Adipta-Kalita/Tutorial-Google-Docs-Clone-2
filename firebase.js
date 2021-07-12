import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCv_lWtm3_fCXRfddQ1xxjabhF7ABOpD3I",
	authDomain: "jak--docs-clone-2.firebaseapp.com",
	projectId: "jak--docs-clone-2",
	storageBucket: "jak--docs-clone-2.appspot.com",
	messagingSenderId: "776841277115",
	appId: "1:776841277115:web:e11762b7cfc1b5bbbb439e"
};

const app = !firebase.apps.length 
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

export const db = app.firestore();
