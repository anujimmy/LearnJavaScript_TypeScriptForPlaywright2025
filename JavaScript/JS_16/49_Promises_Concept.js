let myPromise = new Promise((callbackA_Resolve, callbackB_Reject) => {
    console.log('start the promise .....');
    let success = false;
    if (success){
        callbackA_Resolve('training is done');
    }else{
        callbackB_Reject('failed !!!');
    }
});

myPromise.then(error =>{
    console.log(error);
}).catch(result => {
    console.log(result);
})

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