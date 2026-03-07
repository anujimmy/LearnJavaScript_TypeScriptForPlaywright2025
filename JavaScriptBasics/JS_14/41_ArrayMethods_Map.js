let nos = [1, 2, 3, 4, 5, 6];
let newNum = nos.map(ele => ele + 5);

console.log(nos);
console.log(newNum);


let eleXele = nos.map(ele => ele * ele);
console.log(eleXele);


let words = ['hello', 'world', 'javascript', 'playright'];

let upper = words.map(ele => ele.toUpperCase())
console.log(upper.length);
console.log(upper);

let firstalphabet = words.map(ele => ele[0]);
console.log(firstalphabet);

let newExcla = words.map(ele => ele.concat('%'));
console.log(newExcla);

let products = ['help', 'contact', 'music', 'prime', 'price'];
let links = products.map(i => 'amazon ' + i)
console.log(links);



