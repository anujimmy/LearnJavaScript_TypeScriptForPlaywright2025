let u1 = {
    name : 'pradeep',
    age : 30,
    status : 'active'
};

let u2 = {
    name : 'anu',
    age : 40,
    status : 'inactive'
};

let u3 = {
    name : 'monika',
    age : 50,
    status : 'inactive'
};
console.log(u1);
console.log(u2);
console.log(u3);

console.log('---------');

u1 = u2 = u3; //start from u2 = u3 & then u1 = u2;

console.log(u1);
console.log(u2);
console.log(u3);

console.log('---------');


/*u1 = u2;

console.log(u1);//anu
console.log(u2);//anu
console.log(u3);//monika

console.log('---------');
u2 = u3;
console.log(u1);//anu
console.log(u2);//monika
console.log(u3);//monika

console.log('---------');
u3 = u1;
console.log(u1);//anu
console.log(u2);//monika
console.log(u3);//anu

console.log('---------');*/