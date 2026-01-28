
//For Loops
let i;
for(i = 0;i<=10;i++){
    console.log(i);//012345678910
}

console.log("=============");


for(let I = 0;I<=10;I++){
    console.log(I);//0246810
    I++;
}

console.log("=============");

// for(let m = 1;m<=4;){
//     console.log("m = " + m );

// } infinite loop as m is not incremented

console.log("=============");
let n ;
for(n=0;n<=5;){
    console.log(n);//012345
    n++;
}
console.log("=============");

// for(;;){
//     console.log("BYE!!!");
// }

// above code -->infinite loop in every programming language add break to make it exit after one loop execution.
for(;;){
     console.log("BYE!!!");
     break;
}

for(;1;){
     console.log("BYE!!!");
     break;
}

for(; ;){
     console.log("BYE!!!");
     break;
}
console.log("=============");
for (let s = 10;s>=1;s--){
    console.log(s);//10987654321
}
console.log("=============");
// for (let s = 10;s<=10;s--){
//     console.log(s);//10987654321
// } //--> infinite loop as subtraction will aleays be less than 10

console.log("=============");

for(let num = 1;num<=10;num++){
    if(num%2===0){
        console.log(num + " is even");
    }else{
        console.log(num + " is odd");
    }
    if(num %2 ===1){
        console.log(num + " is odd - 2nd if loop");
    }
}

// use cases for loop - We know the number of iterations is fixed
// for while no if iterations is unknown

//practical examples - 
//1. Order ID creation -> Webelement wait while it displays 
//2. page loading
//3. Webtable with pagination
//4. infinite page scrolling  -> linkedin, youtube, facebook - to like my bestie's post, to order from the fav restaurant
//5. total number of links in any page
//6. Calendar handling
//7. Carousel handling 
//8. get the data from DB-table
//9. progress bar : 0 to 100% : time taken
//10. file downloading / upload : time taken to download it
//11. Wait for the dynamic alert/pop up/advertisement
//12. EOF : end of file 1 to n


// Use case for for Loop : when number of iterations are fixed
// 1. Array - fixed length so we should use for
// 2.dropdown with fixed value : month, day,year, country
// 3. seats in flights/movie/bus booking seats : 120  - > 0 to 119
// 4. Menu items mostly remain same atleast the first one categories 
