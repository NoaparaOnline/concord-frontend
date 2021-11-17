importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
const firebaseConfig = {
    apiKey: "AIzaSyCKBlzBzAzCxvIrNuTGINJhLISPMY6edQ4",
    authDomain: "concordpharma-a4f9e.firebaseapp.com",
    projectId: "concordpharma-a4f9e",
    storageBucket: "concordpharma-a4f9e.appspot.com",
    messagingSenderId: "1013194291451",
    appId: "1:1013194291451:web:fbf28e57ba42048a94585e",
    measurementId: "G-M5GNYWNSSF"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener("notificationclick", function (event) {
});