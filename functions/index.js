"use strict";

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.welcomeUser = functions.auth.user().onCreate(e => {
  const name = e.data.displayName;

  admin.database().ref('/messages').push({
    userName: 'admin',
    photoURL: 'icon.png',
    message: `Welcome, ${name} !`
  });
});

exports.sendNotifications = functions.database.ref('/messages/{messageId}').onCreate(e => {
  const snapshot = e.data;

  const { message, userName } = snapshot.val();
  const payload = {
    notification: {
      title: `${userName} posted message`,
      body: message.length <= 100 ? message : `${message.substring(0, 97)}...`,
      click_action: `https://${functions.config().firebase.authDomain}`
    }
  };

  return admin.database().ref('fcmTokens').once('value').then(allTokens => {
    if (allTokens.val()) {
      const tokens = Object.keys(allTokens.val());

      return admin.messaging().sendToDevice(tokens, payload).then(response => {
        const tokensToRemove = [];
        response.results.forEach((result, index) => {
          const error = result.error;
          if (error) {
            console.error('Failure sending notification to', tokens[index], error);
            if (error.code === 'messaging/invalid-registration-token' ||
                error.code === 'messaging/registration-token-not-registered') {
              tokensToRemove.push(allTokens.ref.child(tokens[index]).remove());
            }
          }
        });
        return Promise.all(tokensToRemove);
      });
    }
  });
});
