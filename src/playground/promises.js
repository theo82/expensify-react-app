

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Theo',
            age: 38
        })
    }, 5000)
});

promise
.then((data) => {
    console.log(1, data)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise')
        },5000)
    })
})
.then((str) => {
    console.log('Is it working?', str);
}).catch((error) => {
    console.log('error: ' + error);
})

