// freeze vs seal;

let user ={
    name : 'anu',
    city : 'LA'
};

console.log(user);

//1. freeze();
//Object.freeze(user); //makes object immuatable : cannot add/update/delete anything
//user.salary = 30; //typeError - object is not extensible
//user.city ='SFO'; //typeError - a read only property
// delete user.city; //ypeError 

//2.seal() : it will allow modifications, but wont allow adding/removing
Object.seal(user);
user.city = 'SFO';
console.log(user);

//delete user.city; // type Error
user.salary = 100; // type Error - object is not extensible

