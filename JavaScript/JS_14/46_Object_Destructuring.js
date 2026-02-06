console.log('-------------------');
let person = {
    name: 'tom',
    age: 30,
    salary: 12.33,
    isActive: true
};

// let { name, age, salary } = person;

// // console.log(myName); //undefined -> ReferenceError : myName is not defined
// console.log(name);
// console.log(age);
// console.log(salary);

// let { name: personName, age: personAge, salary: personSalary } = person;
// console.log(personName);
// console.log(personAge);
// console.log(personSalary);
// let { name: myName } = person;
// console.log(myName);

let { name, age, salary, isActive, city = 'LA' } = person;
console.log(name);
console.log(city);
console.log('-------------------');

let user = {
    name: 'Jimmy',
    age: 70,
    city: 'kochi',
    isPermanent: true
};
//fn design
function getInfo ({ name, isPermanent })
{
    console.log(name);
    console.log(isPermanent);
}
function getDetails ({ name, city, age })
{
    console.log('Age of ' + name + ' is ' + age + '.');
    console.log('He lives in ' + city);
}
//calling the function
getInfo(user);
getDetails(user);
