// 8 falsy values in js:
//false
//0
//-0
//0n - BigInt
//"", '' - empty string
//null
//undefined
//NaN

if (NaN) {//false
    console.log('bye');
}
else {
    console.log('hi');
}

console.log('=========');

if (1.1) {//true
    console.log('hello');
}

if ('admin') {
    console.log('un is correct');
}

let browser = 'chrome';
if (browser) {
    console.log("PASS");
}
else {
    console.log("FAIL");
}

console.log([] == 0);//[]->0==0:true
if ([]) {
    
}
//[] {} --> truthy