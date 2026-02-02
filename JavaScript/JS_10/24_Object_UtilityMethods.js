let wizard = {
    name: 'albus dumbledore',
    age: 108,
    school: 'hogwarts',
    role: 'headmaster',
    pet: 'phoenix'
};
console.log('----- Object.keys - to get all keys in an array -----');
let wiz_Keys = Object.keys(wizard);
console.log(wiz_Keys);
console.log(wiz_Keys.length);
console.log(typeof(wiz_Keys[0]));

console.log('----- Object.values - to get all values in an array -----');
let wiz_Values = Object.values(wizard);
console.log(wiz_Values);
console.log(wiz_Values.length);

console.log('----- Object.entries - to get all key-value as an array in an array -----');
let wiz_pairs = Object.entries(wizard);
console.log(wiz_pairs);

for (let arr of wiz_pairs) {
    console.log(arr[0] + " : " + arr[1]);
}