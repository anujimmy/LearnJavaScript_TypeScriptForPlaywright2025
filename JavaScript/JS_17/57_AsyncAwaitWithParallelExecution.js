
async function getUser(){
      return new Promise(iRes => {
            setTimeout(() => {
                 iRes({id :1,name :'joseph'}); //{id :1,name :'joseph'} is an object
            }, 200);
      });
}

let objUserData = await getUser();
console.log(objUserData);
// console.log(typeof(objUserData));

console.log('**************************');
// returns array of orders object 
async function getOrders() {
      return new Promise(afResolve => {
            setTimeout(() => {
                  afResolve([
                        {orderID : 101,item : ['laptop']},
                        {orderID : 609,item : ['jeans','top']}
                  ]);
            }, 500);
      });
}
//2 tasks : parallel execution
let promiseOrders = getOrders(); // prOrders is a promise until we write await. when we write await it returns the value.
let promiseUsers = getUser();

let [order,user] = await Promise.all([promiseOrders,promiseUsers]);
console.log(user);
console.log(object);
