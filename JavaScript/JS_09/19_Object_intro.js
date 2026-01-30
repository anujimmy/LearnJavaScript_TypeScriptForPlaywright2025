//An object is collection of properties: key-value pair format
//key - string
//value - anything

let user ={
    name : 'harry',
    age : 37,
    status : 'active',
    isEmployed: false
};

console.log(user.name);
console.log(user.age);
console.log(user.DOB); //undefined
//add more properties
user.city = "NY";
console.log(user);
delete user.isEmployed;
console.log(user.city);
console.log(user.isEmployed); // undefined

if(user.name === 'harry'){
    console.log("PASS");
}

user.age = 40;

console.log('----------------');

//iterate the object properties
//using for ...in loop

for (let prop in user){
    console.log(prop + " :   "+ user[prop]);
}

console.log('----------------');
//object refernce variable = null

let person = {
    name: 'hermione',
    age : 18
};

person = null;

console.log(person); //null
console.log(person.name); //typeError - cannot read properties of null