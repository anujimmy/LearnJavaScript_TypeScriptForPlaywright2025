console.log("hello world");
process.stdin.resume(); //used as the process.stdout.write is not outputting any value
process.stdout.write('hello coding');
console.log("check");


console.log('======');

let path1 = 'C:\\Users\\Documents\\file.txt';
let path2 = `C:\Users\Documents\file.txt`;

console.log(path1);
console.log(path2);

let path3 = String.raw`C:\Users\Documents\file.txt`;

console.log(path3);


// \U becomes just U (invalid escape, treated as literal)
// \D becomes just D (invalid escape, treated as literal)
// \f becomes a form feed character(valid escape sequence)
// \t becomes a tab character(valid escape sequence)

console.log('======');


console.log([] == 0); //true []-> ''-> 0 == 0 true
console.log([] == []);// [] are non primitive and therefore object is the type
// both objects are at different locations & JS checks the memory address.
//triple equals for [] === [] -> syntax error
