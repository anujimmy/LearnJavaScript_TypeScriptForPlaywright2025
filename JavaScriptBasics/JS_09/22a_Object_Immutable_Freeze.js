// freeze vs seal;

let user ={
    name : 'albus dumbledore',
    city : 'Hogwarts'
};

console.log(user);

//1. freeze();
Object.freeze(user); //makes object immuatable : cannot add/update/delete anything
//user.salary = 30; //typeError - object is not extensible
//user.city ='SFO'; //typeError - a read only property
//delete user.city; //typeError 

let user2 = {...user};
console.log(user2);


