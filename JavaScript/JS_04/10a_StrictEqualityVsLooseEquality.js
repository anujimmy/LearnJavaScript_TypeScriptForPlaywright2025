//compare: == vs ===
//==: loose equality: value
//===: strict equality: value + type

let n1 = 10;//number
let n2 = "10";//string
console.log(n1 == n2);
console.log(n1 === n2);

console.log(true ==1);
console.log(true ===1);

console.log(false == 0);
console.log(false === 0);

console.log("" == 0);//0==0=true
console.log("" === 0);//false


console.log([] == 0);//0==0=>true

//special case: interview ques:
console.log(null == undefined); //true

console.log(typeof (null));//object
console.log(typeof (undefined));//undefined

console.log(null === undefined);//object === undefined=>false

if (null === undefined) {
    console.log('hi click on the element');
}
else {
    console.log('close browser');
}

let bestpractice = `-------Best Practice :- use === by default,
use  == only when type coercion is required-------`;

let sp_Exception = `=======Exception :- null == undefined is true 
type od null is object & type of undefined is undefined======`;

console.log(bestpractice);
console.log(sp_Exception);


