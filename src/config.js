import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyD-FYxYMZvFcLQfZcllrCeWU0S0_BPvtPc',
    authDomain: 'pool-app-4d7e5.firebaseapp.com',
    databaseURL: 'https://pool-app-4d7e5.firebaseio.com',
    projectId: 'pool-app-4d7e5',
    storageBucket: 'pool-app-4d7e5.appspot.com',
    messagingSenderId: '903195297460',
    appId: '1:903195297460:web:578cff6daaa3dca5d6f9e1',
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
