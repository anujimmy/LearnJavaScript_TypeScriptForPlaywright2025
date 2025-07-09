console.log("====PRACTICE 1 ====");

let i = 11;
let j = i++ + ++i;
console.log(i);
console.log(j);

console.log("====PRACTICE 2 ====");
let a1 = 11;
let b1 = 22;
let c1 = a1 + b1 + a1++ + b1++ + ++a1 + ++b1;
console.log(a1);
console.log(b1);
console.log(c1);

console.log("====PRACTICE 3 ====");
let s = 0;
let x = s++ - --s + ++s - s--;
console.log(s);
console.log(x);


console.log("====PRACTICE 4 ====");

let m1 = 0;
let n1 = 0;

let p1 = --m1 * --n1 * n1-- * m1--;
console.log(m1);
console.log(n1);
console.log(p1);

console.log("====PRACTICE 5 ====");

let d = 1.5;
let D = 2.5;
let res = d++ + ++D;

console.log(d);
console.log(D);
console.log(res);