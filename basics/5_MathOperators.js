console.log("<---addition --->");
console.log(1 + 1);
console.log(1 + '1'); //concatenation will happen here
console.log("1" + "1");
console.log('800' + '200');

console.log("<---subtraction -->");
console.log(5-10);
console.log(1 - '1');
console.log('5' - '2');
console.log(5 - 'hello'); //NaN
console.log("automation" - 10);  //NaN
console.log("javascript" - "vbscript"); //NaN

console.log("<---multiplication --->");
console.log(5 * 2);
console.log('5' *  2);
console.log("7" * "10");
console.log("java" * "script"); //NaN
console.log("java" * "script" - 10); //NaN

console.log("<---division --->");
console.log(6 / 2);
console.log('6' / '2');
console.log('6' / 2);
console.log(9 / 2);
console.log(9.0 / 2);
console.log(9 / 2.0);
console.log(9 / 0); //Infinity
console.log(0 / 9); //0
console.log(0 / 0); //NaN
console.log(0.0 / 0); //NaN
console.log(0.0 / 0.0); //NaN

console.log("<---modulus % --->");
console.log(8 % 2);
console.log(9 % 2);
console.log("8" % 2);
console.log('9' % '2');

console.log("<---power -exponential--->");
console.log(8 ** 2);
console.log(5 ** '3');

console.log("<---UnaryPlus '+' --->");
console.log(+"42" + 5); //convert string to number
console.log(+'800' + +'200');
console.log(+800 + 200);
console.log('vivek' + +'Test');//vivek+NaN=>vivekNaN

console.log("<---UnaryNegation '-' --->");
console.log(-"42" + 2);
console.log(+'800' + -'200');
console.log(-'hello');//NaN

console.log(+'100');
console.log(-'100');



