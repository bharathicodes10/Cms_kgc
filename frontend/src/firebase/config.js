// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLIpnW5aAH2NURKW0-Z3RDIJLbzrAwGCc",
    authDomain: "construction-kgc.firebaseapp.com",
    projectId: "construction-kgc",
    storageBucket: "construction-kgc.appspot.com",
    messagingSenderId: "1001777122582",
    appId: "1:1001777122582:web:2f81c38b9297223a355437",
    measurementId: "G-CMZKKT0L5V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();