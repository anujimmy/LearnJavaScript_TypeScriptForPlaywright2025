let vowels = ['a', 'e', 'i', 'o', 'u'];
let strInput = 'God is Great';
let arrInput = strInput.split(" ");
console.log(arrInput);
vowels.forEach(element =>
{
    //console.log(element);
    //console.log(str);

    if (strInput.includes(element))
    {
        console.log(element + ' is found in ' + strInput);
    } else
    {
        console.log(element + ' is not found in ' + strInput);
    }
});

