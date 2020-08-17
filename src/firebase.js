import firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBc9GNJ9P3atWmxqLMkjiQfBuANfFxaMIU",
    authDomain: "project-161ee.firebaseapp.com",
    databaseURL: "https://project-161ee.firebaseio.com",
    projectId: "project-161ee",
    storageBucket: "project-161ee.appspot.com",
    messagingSenderId: "929450253639",
    appId: "1:929450253639:web:3a921828bf136a6b698062"
}

firebase.initializeApp(config)
const db = firebase.firestore()

export const firebaseAuth = firebase.auth()
export const dbMenuRef = db.collection('menu')
export const menuOrder = db.collection('orders')