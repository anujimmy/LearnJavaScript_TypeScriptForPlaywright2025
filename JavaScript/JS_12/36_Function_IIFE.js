//iife - immediately invoked function expression : no name - self-executing anonymous function
//similar as static block in java - exeuted immediately after being defined with private scope for variables and functionality

let fn_named = function checkOrderOfExecution() {
    console.log("this is a named function");
};
(function () {
    console.log('this is an IIFE');
})();


//no name & no expression is given
//cannot call again and again
//executed immediately after being defined.
//doesnt support function expression but can return something from IIFE
// we have to store in a variable if we return something from IIFE.

(function (servername) {
    console.log('IIFE : start the server' + servername);
})('tomcat');

let newEmpName = (function (empName) {
    console.log('IIFE: emp name is :' + empName);
    return empName.toUpperCase();
})('harry potter');

console.log(newEmpName);

fn_named();