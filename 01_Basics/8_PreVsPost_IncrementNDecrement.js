//1. Post-increment: ++
console.log("1. Post-increment: I++");
let a = 1
let  b = a++;
console.log(a); //2
console.log(b); //1
console.log("------");

let m = -99;
let n = m++;
console.log(m); //-98
console.log(n); //-99
console.log("------");

//2. Pre-increment : ++
console.log("2. Pre-increment : ++I");
let c = 1;
let d = ++c;
console.log(c); //2
console.log(d); //2
console.log("------");

let x = -999;
let y = ++x;
console.log(x); // -998
console.log(y); //-998
console.log("------");

//3. Post-decrement: --
console.log("3. Post-decrement: I--");
let p = 2;
let q = p--;
console.log(p); //1
console.log(q); //2
console.log("------");

let k = -89;
let h = k--;
console.log(k); -90
console.log(h); -89
console.log("------");

//4. pre decrement: --
console.log("4. pre decrement: --I");
let v = 2;
let z = --v;
console.log(v); //1
console.log(z); //1
console.log("------");

let i = 10;
let j = --i;
console.log(i);
console.log(j);

console.log("Examples :-");
let total = 100;
console.log(total++);//100
console.log(total);//101
console.log("------");

let num = 1000;
console.log(++num);
console.log(num);
console.log("------");

let st = '5';//5
console.log(++st); //6
console.log("------");

let tr = '5';
console.log(tr--); //5
console.log("------");