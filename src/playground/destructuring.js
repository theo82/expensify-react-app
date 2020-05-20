// const person = {
//     name: 'Theo',
//     age: 26,
//     location: {
//         city: 'Larisa',
//         temp: 12
//     }
// };

// const { name:firstName = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

// console.log(`${person.name} is ${person.age}`)
// console.log(`${firstName} is ${age}`);

// if(person.location.city && person.location.temp) {
//     console.log(`It's ${person.location.temp} in ${person.location.city}`)
// }

// const { city, temp: temperature } = person.location

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName)


/**
 * Array Destructuring
 */

//  const address = ['Palaiologou 11', 'Larisa', 'Thessaly', '41223']

//  const [street, city, state, zip] = address;
// const [, , state='Epirus'] = address;
//  console.log(`You are in ${address[1]} ${address[2]}`)
// console.log(`You are in ${state}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [coffee,,mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}`);