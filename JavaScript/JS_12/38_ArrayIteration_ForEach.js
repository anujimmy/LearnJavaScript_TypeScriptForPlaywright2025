let vowels =['a','e','i','o','u'];

// for Each

vowels.forEach(ele =>{ 
    console.log('vowel : ' + ele);
});

// in the forEach() - We are passing an arrow function.

let num = [1,3,5,30,5,6];


let evenFlag = num.forEach(iNum => {
    if(iNum % 2 === 0){
        console.log(iNum + ' is even');
        //break ; // syntax error
        // return true; // no change in output
    }else{
        console.log(iNum + ' is odd');
    }
});

//cannot use break or return in the forEach or arrow function
console.log('======some======'); //returns boolean value

let Output = num.some(iNum => {
    console.log(iNum);
    if(iNum % 10 === 0 && iNum % 2 === 0){
        console.log(iNum + ' is divisible by 10');
        return true;
        // break; // break cannot be used   
    }
    return false;
});

console.log(Output);