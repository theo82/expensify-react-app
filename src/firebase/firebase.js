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

  firebase.initializeApp(config);

  const database = firebase.database();
  
  export { firebase, database as default };

//   database.ref('expenses')
//     .push({
//         description: 'Nice phone',
//         amount: 565,
//         title: 'Iphone GS',
//         createdAt: '27/10/2020'
//     })
//   database.ref('expenses')
//     .push({
//         description: 'Nice bike',
//         amount: 450,
//         title: 'IDEAL Prorider' ,
//         createdAt: '27/05/2020' 
//     }) 
//   database.ref('expenses')
//     .push({
//         description: 'Nice machine',
//         amount: 2182,
//         title: 'MacBook Pro' ,
//         createdAt: '06/07/2017' 
//     })     

// database.ref('expenses/-M8cy1cCKM29X_r7klFA').update({
//     amount: '499'
// })
//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.val())
//   })
      
//    database.ref('expenses')
//        .on('value', (snapshot) => {
//            const expenses = [];
//            snapshot.forEach((childSnapshot) => {
//                expenses.push({
//                    id: childSnapshot.key,
//                    ...childSnapshot.val()
//                })
//            });
//            console.log(expenses)
//     })
//  database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });


//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
        
//         snapshot.forEach((childSnapShot) => {
//             expenses.push({
//                 id: childSnapShot.key,
//                 ...childSnapShot.val()
//             })
//         })

//         console.log(expenses);
//     })

  
//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })


//   database.ref('expenses').push({
//       description: 'Nice phone',
//       note: 'Iphone GS',
//       amount: 565,
//       createdAt: '09/06/2020'
//   })

//   database.ref('expenses').push({
//     description: 'Nice bike',
//     note: 'IDEAL Prorider',
//     amount: 450,
//     createdAt: '09/06/2020'
// })

// database.ref('expenses').push({
//     description: 'Nice drone',
//     note: 'Mavic Air',
//     amount: 865,
//     createdAt: '09/06/2020'
// }

//    database.ref('notes/-M8ZbyqX8hvOC2zkqz4d').remove();
//   database.ref('notes').push({
//       title: 'Course topics',
//       body: 'React Native, Angular, Python'
//   })
//   const firebaseNotes = {
//       notes: {
//           sfdsdfdfs: {
//               title: {
//                   title: 'First note!',
//                   body: 'This is my note'
//               },
//               sfdsdfsdfdsf: {
//                   title: 'Another note!',
//                   body: 'This is my note'
//               }
//           }
//       }
//   }
//   database.ref().on('value',(snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//   })
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

