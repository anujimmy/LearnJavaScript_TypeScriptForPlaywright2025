
console.log("<---NUMBER----8 BYTES--->");
let a = 10;
let b = 12.5;
let c = 1000000;
console.log(a + " , " + b + " , " + c);
console.log(a+b+c);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));

console.log("<---STRING----2 BYTES FOR EACH CHARACTER--->");
let Fname = "java";
let Lname = 'javascript';
let fullname = 'vbscript' + ' python';
console.log(Fname);
console.log(Lname);
console.log(fullname);
console.log(typeof(Fname));
console.log(typeof(""));
let username = '';
console.log(typeof (username));

console.log("<---BOOLEAN----4 BYTES>");
let FLAG = true;
let isActive = false;
console.log(typeof(FLAG));
console.log(typeof(isActive));

console.log("<---UNDEFINED----VARIES FROM 0 TO 4 BYTES--->");
let p;
let q = undefined;
console.log(p);
console.log(typeof(q));

console.log("<---NULL->OBJECT----VARIES FROM 0 TO 4 BYTES--->");
let driver = null;
console.log(driver);
console.log(typeof(driver));

console.log("<Re-Assignment with different datatypes>");

let testing = 10;
testing = "naveen";
testing = true;
console.log(testing);

// console.log(abc);
// let abc = "Check this"
