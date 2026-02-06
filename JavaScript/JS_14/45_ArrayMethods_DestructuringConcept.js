let products = ['macbook', 'keyboard', 'iMac'];
let [a, b, c] = products;

console.log(a);
console.log(b);
console.log(c);

console.log('-------------------');

let [first, , third] = products;
console.log(first);//macbook
console.log(third);//iMac

console.log('-------------------');

let [x = 'sim', y, z, p = 'iphone'] = products;
console.log(x);
console.log(y);
console.log(z);
console.log(p);

console.log('-------------------');

let login = ['admin', 'admin123'];
let [username = 'naveen', password] = login;
console.log(username);
console.log(password);

console.log('-------------------');

let numbers = [1, 2, 3, 4, 5];
let [head, ...tail] = numbers;
console.log(head);
console.log(tail);

