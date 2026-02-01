//splice: add/remove elements at specific location

//array.splice(start,deletecount,add_item1,add_item2) & returns the array of elements which are removed

let cart = ["apple", "yoghurt", "lemon", "rice", "chicken", "lemon", "coriander", "masala", "ghee/butter"];

//remove 1 element at index 2
let removed = cart.splice(2, 1);
console.log(cart);
console.log(removed);

let fruits = ["mango", "jackfruit", "guava", "apple", "cashewfruit", "pineapple", "kiwi"];
fruits.splice(2, 3);
console.log(fruits);

//to remove from end use negative index
let fruits1 = ["mango", "jackfruit", "guava", "apple", "cashewfruit", "pineapple", "kiwi"];
fruits1.splice(-2, 1); //kiwi is -1, pineapple is -2, remove 1 item from -2 included
console.log(fruits1); // pineapple is removed

//add 1 fruit at index 1
let fruits3 = ["mango", "jackfruit", "guava", "apple", "kiwi"];
fruits3.splice(1, 0, "watermelon");
console.log(fruits3);

//add multiple elements at the beginning
let num = [4,5,6];
num.splice(0,0,1,2,3);
console.log(num);

//replace
let days =["mon","tue","wed","thur","fri"];
//replace wednesday ->partyday
days.splice(2,1,"partyday");
console.log(days);

let months = ['jan','feb','mar','apr','may','jun','july','aug','sept'];
//replace apr to jun with herbst
months.splice(3,3,"HERBST");
console.log(months);

let months1 = ['jan','feb','mar','apr','may','jun','july','aug','sept','oct','nov','dec'];
//replace march to mai with fruhling
months1.splice(2,3,"FRUHLING");
console.log(months1);
let replace1 = months1.splice(4,5,"SOMMER","HERBST",)
console.log(months1);
console.log(replace1);

let product = ["macbook","canon","samsung","ikea","iphone"];
product.splice(3,1,"apple");
console.log(product);

product = ["macbook","canon","samsung","ikea","iphone"];
product.splice(-6,2); //start > range is considered as 0
console.log(product);


product = ["macbook","canon","samsung","ikea","iphone"];
product.splice(-2,5); //start > range is considered as 0
console.log(product);

let alpha = ['a','b','c','d','e','f'];
alpha.splice(alpha.length-1,'0',2);
console.log(alpha);
console.log(alpha.length);

let n1 = [10,20,30];
n1.splice(n1.length,0,40,50);
console.log(n1);

let day = ['mon','tue','wed','thur','fri','sat','sun'];
day.splice(5,2,"weekend");
console.log(day);


let userData = ['header','data1','data2','data3','footer'];
let data = userData.slice(1,-1);
console.log(data);