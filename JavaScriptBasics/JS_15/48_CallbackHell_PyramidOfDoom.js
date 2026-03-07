//sync & Async activities

//step1 - V
//step2 - III
//step3 - I
//step4 - II
//step5 - IV

//Async parallel - parallel
//1. start machine - 5 sec
//2. boil water - 3 sec
//3. add coffee powder  - 2 sec
//4. pour in coffee - 2.5 sec
//5. serve coffee - 1 sec

//Async functions - functions having its own timeout.

function startMachine (callback)
{
    setTimeout(() =>
    {
        console.log('1. machine started');
        callback();
    }, 5000);
}

function boilWater (callback)
{
    setTimeout(() =>
    {
        console.log('2. Water boiled');
        callback();
    }, 3000);
}
function addCoffeePowder (callback)
{
    setTimeout(() =>
    {
        console.log('3. Coffee powder added');
        callback();
    }, 2000);
}
function pourInCup (callback)
{
    setTimeout(() =>
    {
        console.log('4. Poured in cup');
        callback();
    }, 2500);
}
function serveCoffee (callback)
{
    setTimeout(() =>
    {
        console.log('5. Coffee served');
        callback();
    }, 1000);
}


// startMachine(() => { });
// boilWater(() => { });
// addCoffeePowder(() => { });
// pourInCup(() => { });
// serveCoffee(() => { });

/*  Output :
5. Coffee served
3. coffee powder added
4. poured in cup
2. boil water
1. machine started  */

//the functions are executed parallely & so the function with least timeout is executed first.
//in the stack 5 stacks are created and executed parallely.

//Now lets design the callback hell

//Pyramid of doom... worst way of coding ...used in protracted now deprecated

// creating a pyramid of callling functions  - very difficult to debug.

startMachine(() =>
{
    boilWater(() =>
    {
        addCoffeePowder(() =>
        {
            pourInCup(() =>
            {
                serveCoffee(() =>
                {
                    console.log('hey !! your coffee is ready... enjoy!!!');
                })
            })
        })
    })
});


// to solve callback hell -> we have to start using Promises  -> Async /Await


