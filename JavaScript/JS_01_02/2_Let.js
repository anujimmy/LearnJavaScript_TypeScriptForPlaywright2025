
console.log("-----LET Concept-----");
let b = 20;
function test(){
    //console.log("inside function - "+b); // cannot access b inside function
    let b = 30;
    console.log("inside function after redeclaration - "+ b);
    if(true){
        let b = 40;
        console.log("inside if loop - "+b);
    }
    if(true){
        let b = 1;
        console.log("inside 2nd if loop - "+ b);
    }
    console.log("inside function outside if loop - "+ b);

}
test();
console.log("outside test function - "+ b);


console.log("***Re-declaration of identifier is not allowed with let***");
let c = 10;
//let c = 20; //redeclaration is not allowed
//this will throw an error - Identifier has already been declared

console.log("***Re-assignment of identifier ia allowed***");
c = 20;
console.log("value of c after reassignment - "+ c);

console.log("***Hoisting is not allowed with 'Let'***");
//console.log(os);
let os = "Windows"
//hoisting will throw an error - Reference error - cannot access 'b' b4 initialization
console.log(os);

//lang = "javascript";
//console.log(lang); // throw ReferenceError - lang is not defined as keyword 'let' is skipped
console.log("***************");

let pest;
pest = 100;
console.log(pest);

