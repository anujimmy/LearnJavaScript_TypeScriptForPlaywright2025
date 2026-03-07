console.log("-----VAR Concept-----");
var a = 10; // global variable
//scope: function scope
function test(){
    var a = 20;
    console.log("inside test - " + a);
    if(true){
        var a = 30;
        console.log("inside if loop - " + a);
    }
    //a = 20 is changed to 30 as var has funtion scope.
    console.log("after if loop outside - " + a);
}
test();
console.log("outside test - "+ a);

console.log("***************");

var num = 100;
var num = 200;
console.log(num); // redeclaration is allowed

console.log("***************");
var browser = "Google Chrome";
var browser = "FireFox";
console.log(browser); 

console.log("***************");
var temp = 20;
temp = 30;
console.log(temp); //reassignment is allowed

console.log("***************");
console.log(char);
var char = "a"; // hoisting is allowed - to print value before its declared
//output - undefined for the above code snippet

