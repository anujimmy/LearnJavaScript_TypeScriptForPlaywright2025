console.log(10 == 10);

let a = 30;
let b = 20;
if (a > b) {
    console.log('pass');
}
else {
    console.log('fail');
}

//dead code -> unreachable part of the code
if(true){
    console.log("Welcome!!!");
}else{
    console.log("Bye C u later!!!"); // greyed out as else part is dead code
}
 let isElementDisplayed = true;

 if(isElementDisplayed){
    console.log("click on element");
 }else{
    console.log("Wait for element");
 }

