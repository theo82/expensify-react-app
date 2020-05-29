import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyD7aaHMZmDrnN6zytgBPHNvyddBXocZnMc",
    authDomain: "expensify-b09a1.firebaseapp.com",
    databaseURL: "https://expensify-b09a1.firebaseio.com",
    projectId: "expensify-b09a1",
    storageBucket: "expensify-b09a1.appspot.com",
    messagingSenderId: "989743126819",
    appId: "1:989743126819:web:081b695b26ba8800e05496",
    measurementId: "G-D14P1ZYP4S"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  database.ref().set({
        name: 'Theo Tziomakas',
        age: 38,
        isSingle: true,
        location: {
            city: 'Larisa',
            country: 'Greece'
        }
  }).then(()=>{
      console.log('Data is saved');
  }).catch((e) => {
    console.log('This failed', e)
  });


// database.ref().set('This is my data')

// database.ref('age').set(39)

// database.ref('location/city').set('Athens')

database.ref('attribute').set({
    height: 1.83,
    weight: 89
}).then(() => {
    console.log('Data changed')
}).catch((e) => {
    console.log('Things did not work for the attribute',e)

})

console.log('I made a request to change the data');  