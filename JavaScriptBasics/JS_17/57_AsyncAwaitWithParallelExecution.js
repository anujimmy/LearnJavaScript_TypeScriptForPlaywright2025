
async function getUser(){
      return new Promise(iRes => {
            setTimeout(() => {
                 iRes({id :1,name :'joseph'}); //{id :1,name :'joseph'} is an object
            }, 1500);
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
            }, 2000);
      });
}
// //case 1
// //2 tasks : parallel execution - total time is 2 secs max of (1.5 & 2 secs)
// let promiseOrders = getOrders(); // prOrders is a promise until we write await. when we write await it returns the value.
// let promiseUsers = getUser();

// let data = await Promise.all([promiseUsers,promiseOrders]);
// console.log(data);
// console.log('**************************');

// let [user,orders] = await Promise.all([promiseUsers,promiseOrders]);
// console.log(user);
// console.log(orders);

////case 2 : if await is used. -> sequential execution

let myUser = await getUser(); // takes 1.5 secs, myUser is value and not a Promise
let myOrders = await getOrders();// takes 2 secs after executing getUser
let data = await Promise.all([myUser,myOrders]);
////total time is 1.5 + 2 = 3.5 secs
console.log(data);

//// case 3 : dont wait for anything just proceed: dont use await while calling

async function sendEmailNotification(emailID) {
      return new Promise((resolve)=>{
            setTimeout(() => {
                  console.log(`email has been sent to ${emailID}`);
                  resolve(true);
            }, 5000);
      })
};

//calling it
let isEmailSent = sendEmailNotification('abc@def.com')
console.log(isEmailSent);
console.log('checkout the order ---DONE!!!');