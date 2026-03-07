


function startMachine ()
{
      return new Promise((resolve =>{
            setTimeout(() =>{
                  console.log('1. machine started');
                  resolve();
            }, 5000);
      }));
}

function boilWater ()
{     
      return new Promise ((resolve) => {
            setTimeout(() =>{
                  console.log('2. Water boiled');
                  resolve();
            }, 3000);
      });
}
function addCoffeePowder ()
{     return new Promise ((resolve) => {
            setTimeout(() =>{
                  console.log('3. Coffee powder added');
                  resolve();
            }, 1500);
      });
}
function pourInCup ()
{     
      return new Promise ((resolve) => {
            setTimeout(() =>{
                  console.log('4. Poured in cup');
                  resolve();
            }, 2000);
      });
}
function serveCoffee ()
{     
      return new Promise ((resolve) => {
            setTimeout(() =>{
                  console.log('5. Coffee served');
                  resolve();
            }, 1000);
      });
}


//callign the function using .then() chaining
//all functions here are resolve we use only then()

/* startMachine()
      .then(boilWater)
      .then(addCoffeePowder)
      .then(pourInCup)
      .then(serveCoffee)
      .then(result => console.log('enjoy your coffee!!!')); */

// Most latest async - await are the way we use it now.

async function makeCoffee() {
      await startMachine();
      await boilWater();
      await addCoffeePowder();
      await pourInCup();
      await serveCoffee();
      console.log('enjoy your coffee!!!');
}

makeCoffee();


//AC: fetch the data from APO
//get call : url
//response
//parse json