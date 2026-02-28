
async function fetchData(){
      return new Promise(res=>{
            setTimeout(() => {
                  console.log('fetching data');
                 res(100);
            }, 2000);
      });
}

let data = await fetchData();
console.log(data);

console.log('**************************');

async function getUser(){
      return new Promise(iRes => {
            setTimeout(() => {
                 iRes({id :1,name :'joseph'}); //{id :1,name :'joseph'} is an object
            }, 200);
      });
}

let objUserData = await getUser();
console.log(objUserData);
console.log(typeof(objUserData));

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
let prOrders = getOrders(); // prOrders is a promise until we write await. when we write await it returns the value.

let arrOrders = await getOrders();
console.log(arrOrders);