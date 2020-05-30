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

  database.ref().on('value',(snapshot) => {
      const val = snapshot.val();
      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
  })
//   database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   });
//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })
//   database.ref().set({
//         name: 'Theo Tziomakas',
//         age: 38,
//         isSingle: true,
//         stressLevel: 6,
//         job: {
//             title: 'Software developer',
//             company: 'Google'
//         },
//         location: {
//             city: 'Larisa',
//             country: 'Greece'
//         }
//   }).then(()=>{
//       console.log('Data is saved');
//   }).catch((e) => {
//     console.log('This failed', e)
//   });

// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     job: 'Software developer',
//     isSingle: null
// });

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Thessaloniki'
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Larisa'
// })
