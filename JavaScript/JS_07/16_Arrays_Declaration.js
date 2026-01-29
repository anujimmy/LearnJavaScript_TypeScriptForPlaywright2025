// Array : collection of multiple elements in a single variable
//[]

let a = []; // empty array
console.log(a.length); //length is a property not a method as it doesnt have parentheses ().
console.log(a);

let arr = [10, 20, 30, 40]// array literals : 0-3 :4
console.log(arr.length);
console.log(arr); // complete array is printed
console.log(arr[3]);
console.log(arr[4]);// undefined
console.log(arr[-1]);//undefined


//mixed data types
let emp_Data = ['anu', 37, 68.5, 151, 'f', true];
console.log(emp_Data.length);
console.log(emp_Data);

// declare the array using array constructor
// constructor is by using new Keyword

let num = new Array(100, 200, 300, 400, 500);
console.log(num);

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);
console.log(test[0]);

// dynamic array : in JS everything is dynamic by default
// no concept of fixed size array
// go to Array_Manipulation.js 