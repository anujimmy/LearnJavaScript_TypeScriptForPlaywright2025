

let myCakePromise = new Promise((cbFn_Resolve,cbfn_Reject) =>{
    console.log('Cake Ordered & Baking Started');
    let blnCompleted = false;
    if(blnCompleted){
        cbFn_Resolve('Cake completed & delivered');
    }else{
        cbfn_Reject('Baker Sick, Sorry Cake is not yet complete !!!');
    }
});

myCakePromise
  .then(fulfilled =>{
    console.log(fulfilled);
}).catch(rejected => {
    console.log(rejected);
}).finally(()=>{
    console.log('Lets Partyyyy')
})

// myCakePromise.then(result => console.log(result),error => console.log(error));

let myPromise = new Promise((resolve, reject) => {
    // setTimeout(()=> resolve("done"),1000);
    setTimeout(() => reject('mission failed!!'),500);
});

/*myPromise.then((result) => {
    console.log(result);
},(error) => {
    console.log(error);
});*/

myPromise.catch(error);