let num = 6234876408912368271348972389;
console.log(num);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let a = 10n;
console.log(typeof(a));

let total = 5368452354800000n;
//console.log(total + 220); 
console.log(total + 123n);

console.log(10n + 10n);
console.log(10n - 10n);
console.log(10n * 2n);
console.log(5n / 2n);

console.log((10n +10n)+20); //type error - cannot mix bigint and other types