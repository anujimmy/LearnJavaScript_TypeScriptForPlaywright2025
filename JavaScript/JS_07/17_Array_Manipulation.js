

let arr = [1, 2, 3];

//push method adds values at the end of the array
arr.push(0);
arr.push(4);
console.log(arr);
arr.push('chrome')

console.log(arr);

//unshift method adds values at the beginning
arr.unshift('firefox');
console.log(arr);

let browser = ['ie', 'chrome', 'ff', 'edge', 'safari', 'opera'];
console.log(browser.length);

//pop() - remove from end
console.log('----pop-----');
let removedValue = browser.pop();
console.log(browser);
console.log(removedValue);

//shift - removes from beginning
console.log('----shift-----');
removedValue = browser.shift();
console.log(browser);
console.log(removedValue);

//print all the vlaues from an array : use loops

let mybrowser = ['ie', 'chrome', 'ff', 'safari', 'opera', 'edge'];

//1. index loop
console.log('------1. index loop');
for (let iBr = 0; iBr < mybrowser.length; iBr++) {
    console.log(mybrowser[iBr]);
    if (mybrowser[iBr] === 'safari') {
        console.log("run in headless mode");
        break;
    }
}

let emp = ['anu', 'sita', 'gita', 'maya', 'chris'];
for (let i = emp.length - 1; i >= 0; i--) {
    console.log(emp[i]);
}

//2. for ... of loop ----> values
console.log('------2. for ... of loop------');
for (let e of mybrowser) {
    console.log(e);
    if (e === 'ie' || e === 'opera') {
        console.log(e + " - this browser is not supported");
    }
}

//2. for ... in loop. ----> index
for (let i in emp) {
    console.log(i + " --> " + emp[i]);
}

//reverse:
console.log('--- reverse()---');
console.log(mybrowser);
mybrowser.reverse();
console.log(mybrowser);

console.log('--- join()---');
let words =['hello','anu','lets','learn','javascript'];
let sentence = words.join( " ");
let sentence_ = words.join("_");
let sentence_csv = words.join(","); //array to csv

console.log(sentence);
console.log(sentence_);
console.log(sentence_csv);

//copying and combining: using ...(spread operator)
let first = [1,2,3];
let second = [...first];
console.log(second);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];

console.log(arr3);

let arr4 = arr1.concat(arr2);
console.log(arr4);

console.log(arr4 === arr3); //=== operator compares array references, not their contents.

