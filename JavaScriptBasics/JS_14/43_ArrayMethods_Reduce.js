console.log('===============================');
let numbers = [1, 2, 3, 4, 5];
//sum of the elements
let sum = numbers.reduce((total, num) => total = total + num, 0);
console.log(sum);

let multiply = numbers.reduce((prod, num) => prod * num, 1);
console.log(multiply);

let marks = [85, 90, 78, 92, 88];
let avg = marks.reduce((total, ele) => total = total + ele, 0) / marks.length;
console.log(avg);

console.log('===============================');


let dict = ['hello', 'javascript', 'playwright'];
console.log(dict.reduce((result, ele) => result + ' ' + ele));

console.log(dict.reduce((result, ele) => result + ',' + ele));


console.log('===============================');

let dictA = ['hello', 'javascript', 'playwright', 'cucumber'];
//hello javascript playwright
let newDict = dictA.reduce((result, ele) => result + ',' + ele, ' ');
console.log(newDict);

//hello,javascript,playwright
newDict = dictA.reduce((result, ele) => result + ele + ',', '');//
console.log(newDict.slice(0, newDict.length - 1));

console.log('================================');

let doubtArray = ['hello', 'javascript', 'playwright', 'cucumber', 'git', 'sql'];
let newArr = doubtArray.reduce((result, ele) => result + '$' + ele, '   ').trim();
console.log(newArr);
