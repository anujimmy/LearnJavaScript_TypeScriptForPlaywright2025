let promise1 = new Promise((resolve,reject) =>{
    // resolve('promise1 is passed');
    reject('promise 1 is failed');
})

let promise2 = new Promise((resolve, reject) =>{
    resolve('promise2 is passed');
    // reject('promise 2 is failed');
})

let promise3 = new Promise((resolve, reject) =>{
    resolve('promise3 is passed');
    // reject('promise 3 is failed');
})

Promise.all([promise1,promise2,promise3])
    .then(result => {
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })
    .finally(()=>{
        console.log('all promised are settled.');
    });

/*
If any of the promises fail - then failed promise goes to catch & finally is executed. - passed promises are skipped.

If all are resolved - In the result it will hold all three & finally is executed
*/