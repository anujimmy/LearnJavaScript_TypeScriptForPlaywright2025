let number = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = number.slice(2, 4)//o/p has index - 2 & 3 but exclude 4
console.log(num);

let lastsix = number.slice(-6); // to get last numbers
console.log(lastsix);

let beyond12 = number.slice(-13);
console.log(beyond12);

let nm = [1, 2, 3, 4, 5, 6];
let nm1 = nm.slice(0);
console.log(nm1);

nm1 = nm.slice(5);//start from index 5 to length of the array
console.log(nm1);