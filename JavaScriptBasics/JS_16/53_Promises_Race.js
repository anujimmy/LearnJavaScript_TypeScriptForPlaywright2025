let p1 = new Promise((resolve,reject) =>{
      setTimeout(()=>{
            resolve('p1 is done....');
      },1000);
})
let p2 = new Promise((resolve,reject) =>{
      setTimeout(()=>{
            resolve('p2 is done....');
      },1000);
})

let p3 = new Promise((resolve,reject) =>{
      setTimeout(()=>{
            // resolve('p3 is done....');
            reject('p3 is not done....');
      },1000);
})


Promise.race([p1,p2,p3])
      .then(result =>{
            console.log(result);
      }).catch(error => {
            console.log(error);
      }).finally(()=>{
            console.log('all are done');
      })

// Promise.race() returns the promise which gets settled first irrespective of they are fulfilled or rejected. 