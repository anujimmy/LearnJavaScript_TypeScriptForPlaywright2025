let numbers = [1,2,3,4,5];
let i = numbers.indexOf(2); //1st occurence of the value
console.log(i);

let harrypotter_books = ['philosophers stone','chamber of secrets','prisoner of azkaban','goblet of fire','order of phoenix','half blood prince','deathly hallows'];
let nthBook = harrypotter_books.indexOf('half blood prince');
console.log(nthBook); 
console.log(harrypotter_books.indexOf('prince caspian')); // not present returns -1
nthBook = harrypotter_books.indexOf('HALF BLOOD PRINCE'); // Case sensitive
console.log(nthBook); 

if((harrypotter_books.indexOf('prince caspian')) === -1){
    console.log("PASS - BOOK is not included in Box Set as expected");
}else{
    console.log("FAIL - BOOK is included in Box set series. Pls Check !!!");
}


let HP_books = ['philosophers stone','chamber of secrets','prisoner of azkaban','goblet of fire','order of phoenix','half blood prince','deathly hallows'];
console.log(HP_books.includes('goblet of fire')); // returns true or false

// how to get 2nd occurence
let msg = ['hi','this','is','javascript','coding','this','coding','auto','this'];

let n1 = msg.indexOf('this');
console.log(n1);

let n2 = msg.indexOf("this",n1+1);
console.log(n2);

let n3 = msg.indexOf('this',n2+1);
console.log(n3);

let n22_1= msg.lastIndexOf('this');
console.log(n22_1);

let n22_2 = msg.lastIndexOf('this',n22_1-1);
console.log(n22_2);

let n22_3 = msg.lastIndexOf('this',n22_2-1);
console.log(n22_3);

//while loop/for loop : to get the occurence of naveen - HW