

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let new_num = numbers.filter(ele => (ele % 2 === 0 || ele % 3 === 0)); // divisible by 2 & 3

console.log(new_num);

console.log('odd numbers in numbers ' + numbers.filter(ele => ele % 2 === 1)); // odd numbers

new_num = numbers.filter(ele => (ele >= 3 && ele < 7));
console.log(new_num);

let products = ['help', 'contact', 'music', 'prime', 'price'];
console.log(products.filter(ele => ele.length > 4));

let marks = [85, 92, 67, 78, 95, 43, 88, 99];
console.log(marks.filter(i => i >= 70));

let marks1 = [-85, 92, 67, 78, 95, 43, -88, 99, 0, -5];
console.log(marks1.filter(i => i > 0).filter(i => i > 70));

let footer = ['amazon help', 'contact', 'amazon music', 'amazon prime', 'price'];
console.log(footer.filter(iLink => iLink.startsWith('amazon')));
console.log(footer.filter(iLink => iLink.startsWith('amazon')).filter(iLink => iLink.includes('prime')));

let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let output = allNumbers.filter(ele => (ele % 2 === 0 || ele % 3 === 0 || ele % 5 === 0 || ele % 7 === 0));
console.log(output);