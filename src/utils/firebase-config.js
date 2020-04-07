import { initializeApp } from 'firebase';

export const initFirebase = () => {
    // configuration de firebase à récupérer dans la console firebase...
    var firebaseConfig = {
      apiKey: "*******",
      authDomain: "*******",
      databaseURL: "*******",
      projectId: "*******",
      storageBucket: "*******",
      messagingSenderId: "*******",
      appId: "*******",
      measurementId: "*******"
      };

      initializeApp(firebaseConfig);
}