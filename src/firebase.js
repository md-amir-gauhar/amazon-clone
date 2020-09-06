import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAv1zEG0A-3pE7Wc39GSZoPbpaOm0RhQxk',
  authDomain: 'clone-c03da.firebaseapp.com',
  databaseURL: 'https://clone-c03da.firebaseio.com',
  projectId: 'clone-c03da',
  storageBucket: 'clone-c03da.appspot.com',
  messagingSenderId: '836805815997',
  appId: '1:836805815997:web:5ec92a72c2a3dd002951d4',
  measurementId: 'G-MXFRJC51K4',
});

const auth = firebase.auth();

export {auth};

