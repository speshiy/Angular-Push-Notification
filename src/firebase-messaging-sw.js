importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyCRclNowI59cWRKkfToG0n-mQwbmmBIUxw",
    authDomain: "tuvisworld.firebaseapp.com",
    databaseURL: "https://tuvisworld.firebaseio.com",
    projectId: "tuvisworld",
    storageBucket: "tuvisworld.appspot.com",
    messagingSenderId: "273945911021",
    appId: "1:273945911021:web:85bc3d2d974682d05976e4",
    measurementId: "G-MKHTG5YX1X"
});

const messaging = firebase.messaging();