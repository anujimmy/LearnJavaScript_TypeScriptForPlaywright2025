let myPromise = new Promise((callbackA_Resolve, callbackB_Reject) =>{
    console.log('start the promise .....');
    let success = false;
    if (!success)
    {
    //     callbackA_Resolve('promise fulfilled')
    // } else
    // {
        callbackB_Reject("failed!!!")
    }
});


