console.log("-----CONST Concept-----");

const days = 7;
const months = 12;

let salary = 500;
console.log("total yearly salary - " + salary*months);

// days = 31; 
console.log("1. Reassignment of const variables is not possible - " + days);
console.log("Reassignment -  TypeError - assignment to const variable - Error should be displayed");
// const days = 8;
console.log("2. Redeclaration of identifiers is not possible");
console.log("Redeclaration - SyntaxError: Identifier  has already been declared");
console.log("3. hoisting is anot allowed");
console.log("Hoisting - ReferenceError: Cannot access '' before initialization");
// console.log(homePageTitle);
// const homePageTitle = "Account login";
