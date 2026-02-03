//NAMED FUNCTIONS
//we can hoist the function - call the function before declaration
test();
function test() {
    console.log('test function');
}
//calling functions
test()

console.log('--------------------------');
//////Function with input param but no return parameter
/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function add_JSdoc(a, b) {
    let sum = a + b;
    console.log(sum);
}
add_JSdoc(1000, 30000);
add_JSdoc('anu', 'jimmy');

console.log('--------------------------');

// Functions with both input and return param
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function addition(a, b) {
    let sum = a + b;
    console.log("adding 2 numbers and returning their sum");
    return sum;
}

let c = addition(1212.34, 6598.90);
console.log("sum is " + c);
console.log('--------------------------');

/////complex function with switch case
/**
 * 
 * @param {string} strBrowserName 
 * @returns {boolean} 
 */
function launchBrowser(strBrowserName) {
    console.log('Browser name is ' + strBrowserName);
    switch (strBrowserName.trim().toLowerCase()) {
        case 'chrome':
            console.log(strBrowserName + ' is launched.');
            return true;
        case 'firefox':
            console.log(strBrowserName + ' is launched.');
            return true;
        case 'edge':
            console.log(strBrowserName + ' is launched.');
            return true;
        case 'safari':
            console.log(strBrowserName + ' is launched.');
            return true;
        default:
            console.log(strBrowserName + ' is invalid !!!');
            return false;
    }
}
let isBrowserlaunched = launchBrowser('safari');
console.log(isBrowserlaunched);
if(isBrowserlaunched){
    console.log('launch URL');
}
console.log(typeof(launchBrowser));

console.log('--------------------------');