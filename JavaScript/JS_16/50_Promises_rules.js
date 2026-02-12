let myPromise = new Promise((callbackA_Resolve, callbackB_Reject) =>
{
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

myPromise.then().catch(result =>
{
    console.log(result);
})
// callback resolve function in definition is a must. but if we use or it is upto us.
