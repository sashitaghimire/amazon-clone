import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyCW_5jxEmQaX2Ok2tvjWgQnEurtVqc235Q",
        authDomain: "clone-a0dd5.firebaseapp.com",
        databaseURL: "https://clone-a0dd5.firebaseio.com",
        projectId: "clone-a0dd5",
        storageBucket: "clone-a0dd5.appspot.com",
        messagingSenderId: "124915825802",
        appId: "1:124915825802:web:d02b399d7a18c1f26fc173",
        measurementId: "G-6D5G3NYETN"
      

});


const auth = firebase.auth();

export { auth};