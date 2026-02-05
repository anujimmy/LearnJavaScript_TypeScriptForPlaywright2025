//callback : passing the function name to another function as a parameter
//call by function by passing the function names 
// we can pass function names & values with return values as well


let sum = (a, b) => a + b;
let diff = (a, b) => a - b;
let prod = (a, b) => a * b;
let quo = (a, b) => b / a;
// the above functions are arrow functions

//calculator function
/**
 * Objective : A calculator function
 * @param {Function} funcName 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function calculator(funcName, a, b) {
    console.log('FunctionName is ' + funcName);
    console.log('something is executed here......our logic');
    // something......our logic
    let s1 = funcName(a, b);
    console.log('Value returned is ' + s1);
    return s1;
}

calculator(sum, 10, 20);
calculator(diff, 10, 20);
calculator(prod, 10, 20);
calculator(quo, 10, 20);

// calculator(math,10,20); // math is not defined : referenceError

console.log('====================');

function summing(a, b) {
    return a + b;
}

function fnCalculator(a, b, funcName) {
    console.log('some logic......');
    console.log('function called : ' + funcName);
    return funcName(a, b);
}

let valSum = fnCalculator(100, 10000, summing);
console.log(valSum);

valSum = fnCalculator(300, 3.001, sum);
console.log(valSum);

console.log('######################');

//designing  a function : never create any arrow/anonymous function bodyy while designing the function.
function doSomething(funcName, strBrowserName, strURL) {
    console.log('entering the url ....' + strURL);
    funcName();
    console.log('open Browser ' + strBrowserName);
}
// now we donot know what is the func name code block  & we are calling the function - doSomething
// since we donot know the name we pass the body of the arrow function here
doSomething(() => {
    console.log('clear cache & cookies');
}, 'safari', "https://www.google.com");

// this is called call by passing callback function body & browser & url values.

//Practical implementation :
// 1. when the arrow function body is very small and is limited to 1-2 statements , no need to write a separate arrow function and call we can directly write the body there.

console.log('######################');
//Function defined using arrow function
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {*} operationFn is a arrow function body
 * @returns 
 */
let performOps = (a, b, operationFn) => {
    return operationFn(a, b);
};

const result = performOps(100.003, 100, (x, y) => x * y);
console.log(result);



