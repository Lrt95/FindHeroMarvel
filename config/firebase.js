
import '@firebase/auth';
import firebase from 'firebase/compat';

export const firebaseConfig = {
  apiKey: 'AIzaSyAKFWYmcwCYjpdIwhdkfytM5dPhpRQXu8Q',
  authDomain: 'findheromarvel.firebaseapp.com',
  projectId: 'findheromarvel',
  storageBucket: 'findheromarvel.appspot.com',
  messagingSenderId: '24781246793',
  appId: '1:24781246793:web:78f2c4927c78ab637d0a98',
  measurementId: '${config.measurementId}',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
