//this function returns a promise - resolve
function doubleAmountAfter2Seconds (X)
{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(X * 2);
        }, 2000);
    })
}

//call the function

doubleAmountAfter2Seconds(5)
    .then(result =>{
        console.log(result);
        return doubleAmountAfter2Seconds(result);
    }).then(result =>{
        console.log(result);
    })


