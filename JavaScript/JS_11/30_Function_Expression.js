let testing = function getTrainerName() {
    console.log('get the trainer details');
}

testing(); // correct
// getTrainerName(); //reference Error - getTrainerName is not defined

console.log('-------------------------');
//function expression with params

let add = function addingTwoNumbers(a,b){
    let sum = a + b;
    return sum;
}

let s1 = add(400,200);
console.log(s1);
console.log(add.name);

console.log('-------------------------');
/**
 * 
 * @param {string} strBrowserName 
 * @returns {boolean}
 */
let launchBrowser = function openBrowser(strBrowserName){
    console.log('Browser name is ' + strBrowserName);
    switch (strBrowserName.trim().toLowerCase()) {
        case 'chrome':
            console.log(strBrowserName + ' is launched.');
            return true;
        case 'firefox':
            console.log(strBrowserName + ' is launched.');
            return true;
        default:
            console.log(strBrowserName + ' is invalid !!!');
            return false;
    }
}
console.log(launchBrowser.name);
if(launchBrowser('chrome')){
    console.log('enter URL');
}else{
    console.log('no need to enter URL');
}