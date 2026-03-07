console.log("******my solution*******");
/*let arr = [10,20,30,40];
console.log(arr);
let new_arr = [];

for (let e of arr){  
    new_arr.unshift(e);
}

console.log(new_arr);

let new_arr1 = [];
for(let ele in arr){
    new_arr1.unshift(arr[ele]);
}
console.log(new_arr1);*/

console.log("******actual solution******");
let arr = [10,20,30,40];
let count = arr.length-1;
for (let ele of arr){
    console.log(arr[count]);
    count--;
}
console.log('-------------');
count = arr.length-1;
for (let ele in arr){
    ele = count;
    console.log(arr[ele]);
    count--;
}