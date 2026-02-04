let wizard = {
    name: 'Harry',
    house: 'slytherin'
};

let wizard1 = { ...wizard };

wizard1.house = 'gryffindor';

console.log(wizard.house);
console.log(wizard1.house);

//above code created 2 objects and when one is changes it doesnt impact the other one.
console.log('==================');
let u1 = {
    name: 'ron',
    house: 'gryffindor'
};

let u2 = u1;
console.log(u1);
console.log(u2);
u2.age = 50;
console.log(u1);
console.log(u2);

//above code created 1 object & 2 references in the memory
//u1 & u2 point to same obj so when an edit happens to one when we print u1 or u2 it refers to the same object