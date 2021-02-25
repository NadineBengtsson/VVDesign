import firebase from 'firebase/app';
import '@firebase/firebasestore'; 

const app = firebase.initializeApp({
    apiKey: "AIzaSyBRCVvLUktQeTmVE2aGEyrWZmDxtBCh9Ic",
    authDomain: "vvdesign-3f9ab.firebaseapp.com",
    projectId: "vvdesign-3f9ab",
    storageBucket: "vvdesign-3f9ab.appspot.com",
    messagingSenderId: "341527377980",
    appId: "1:341527377980:web:ef158e8c9595e044126b39",
    measurementId: "G-LQLRB14HEZ"
  });

  export const getFirebase = () => {
      return app;
  }
  export function getFirestore() {
        firebase.analytics(app);
      return firebase.firestore(app);
  }
