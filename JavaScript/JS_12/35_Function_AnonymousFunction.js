// anonymous fn. - funtion without name

let check = function check() { //named function
    console.log('check data');
}
// say();  - reference error - cannot accces say before initialization : only named fns can be hoisted
let say = function () { // anonymous fn with function expression
    console.log('hello world');
}

say();
console.log(say.name);
check();

let add = function (a = 0, b = 0) {
    return a + b;
}
let s1 = add(10, 20);
console.log(s1);
s1 = add();
console.log(s1);
console.log(add.name); // internal name is not written , but the external name is output

console.log('======================');
/**
 * 
 * @param {string} browserName 
 */
let isBrowserlaunched = function (browserName) {
    switch (browserName.trim().toLowerCase()) {
        case 'firefox':
            console.log('open ff');
            return true;
        case 'chrome':
            console.log('open chrome');
            return true;
        default:
            console.log('invalid browser - ' + browserName);
            return false;
    }
}


if (isBrowserlaunched('chrome')) {
    console.log('open url');
}