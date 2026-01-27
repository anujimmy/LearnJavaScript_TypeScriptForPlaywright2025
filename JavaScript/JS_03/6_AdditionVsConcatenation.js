let a = 600;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

let x = 'hello';
let y = 'JS';

console.log(x + y); //concatenation
console.log(a + b + x + y); //602helloJS
console.log(x + y + a + b); //helloJS6002
console.log(x + y + (a + b)); //helloJS602
console.log(a + b + x + y + a + b); //602helloJS6002
console.log(a + b + x + y + (a + b)); //602helloJS602

console.log("A is "+ a);
console.log("B is "+ b);
console.log("Sum of A & B is " + a+b);
console.log("Sum of A & B is " + (a+b));

console.log(true + 'hello' + false);
console.log(12.33 + 12.67 + x + y + a +b);
console.log('java' + 'script' - 'script'); //NaN
