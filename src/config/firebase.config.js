
import firebase from "firebase/compat/app"
import "firebase/compat/auth"


const app = firebase.initializeApp({
    apiKey: "AIzaSyDLDMWYkYYIqOcUYfKgoS2gJ8tYvUfj1oY",
    authDomain: "react-app-auth-aa689.firebaseapp.com",
    projectId: "react-app-auth-aa689",
    storageBucket: "react-app-auth-aa689.appspot.com",
    messagingSenderId: "388455073035",
    appId: "1:388455073035:web:cc96280dd2e633a5000e0e",
});

export const auth = app.auth();


export default app;