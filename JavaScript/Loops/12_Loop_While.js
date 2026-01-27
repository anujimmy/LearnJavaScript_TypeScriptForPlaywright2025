
let i=0; //--> initialization
while(i<10){ //--> condition statement
    console.log(i + " is printed"); //--> statements
    i++; // --> increment/decrement
}
console.log("=============");
//break

let j1 = 0;
while (j1< 10){
    console.log(j);
    if (j1 === 5){
        console.log("BYE");
        break;
    }
    ++j1;
}

//break will break the entire loop and not just if loop

//but generally while loop is used when we dont know the no of loops 

console.log("=============");

let j = 0;
while (j< 10){
      break; // --> here break is not at a correct position --> this leads to dead code -> put break when any condition gets satisfied.
    console.log(j);
    if (j === 5){
        console.log("BYE");
      
    }
    ++j;
}

console.log("=============");

while(true){
    console.log("Welcome to India -->");
    break;
}

while(1){
    console.log("Welcome to India -->");
    break;
}

while(false){
    console.log("Welcome to India -->");
    break;
}

// without break its infinite loop & with break its good.

