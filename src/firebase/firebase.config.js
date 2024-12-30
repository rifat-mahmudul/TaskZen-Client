// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMJZe3WMn1MChmR6k8U2SfuV6v3-ybDjI",
    authDomain: "jobify-b1709.firebaseapp.com",
    projectId: "jobify-b1709",
    storageBucket: "jobify-b1709.firebasestorage.app",
    messagingSenderId: "737177882546",
    appId: "1:737177882546:web:07e11028e3c79769315eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);