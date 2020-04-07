import { initializeApp } from 'firebase';

export const initFirebase = () => {
    // configuration de firebase à récupérer dans la console firebase...
    var firebaseConfig = {
      apiKey: "AIzaSyCpLFZ0jeUrFIM0ITjepcAX9L-dJw9QI9E",
      authDomain: "my-netflix-706ea.firebaseapp.com",
      databaseURL: "https://my-netflix-706ea.firebaseio.com",
      projectId: "my-netflix-706ea",
      storageBucket: "my-netflix-706ea.appspot.com",
      messagingSenderId: "711208598393",
      appId: "1:711208598393:web:cbceaba0ab887cb63ccda8",
      measurementId: "G-TEBWQFTKBR"
      };

      initializeApp(firebaseConfig);
}