// Arrow function - no function name --- > aka 'anonymous function


let print = () => {
    console.log('Arrow function: hello world');
}

print();
console.log('===============');

let say = () => console.log('hello anu');// only for 1 line function block
say();

console.log('===============');

let even = (num) => num % 2 === 0; // for a function which has some logical or arithmentic expression or a calculation & is only 1 line , return keyword can be skipped.

let e1 = even(10);
console.log(e1);

console.log('===============');
//arrow function with 1 param - () can be skipped 
let double = value => value * 2; // parentheses can be skipped if we have only 1 parameter
let r1 = double(300);
console.log(r1);

console.log('===============');
//arrow function with 2 param - () is mandatory
let sub = (a, b) => a - b;
let s = sub(10, 20);
console.log(s);

console.log('===============');
let bye = e => console.log('Bye ' + e);
bye();

console.log('===============');
/*
external name : openBrowser
intername : no name -> anonymous
param - 1 prameter - browsername
return - 1 boolean - true /false
*/
let openBrowser = browserName => {
    switch (browserName) {
        case 'chrome':
            console.log('launch chrome');
            return true;

        default:
            console.log('invalid browser');
            return false;
    }
};

let blnFlag = openBrowser('chrome');
console.log(blnFlag);


console.log('===============');
/**
 * 
 * @param {String} envName 
 * @param {String} browserVersion 
 */
let checkEnv = (envName, browserVersion) => {
    console.log('env name - ' + envName);
    console.log('browser version - ' + browserVersion);
};
checkEnv('QA', '125.11.12.56');