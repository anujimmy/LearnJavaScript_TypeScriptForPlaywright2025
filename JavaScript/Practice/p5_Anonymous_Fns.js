let product = function (a, b)
{
    return a * b;
}

let pdt = product(3, 5);
console.log(pdt);

let ifEven = function (n)
{
    switch (n % 2 === 0)
    {
        case true:
            console.log('Even number is found - ' + n);
            break;
        case false:
            console.log('Odd number is found - ' + n);
            break;
        default:
            console.log('Problem occurred with Entry - ' + n);
            break;
    }
}


console.log(ifEven(90)); //Even number is found - 90 undefined


let convertCtoF = function (numCelsius = 0)
{
    let fahrenheit = (numCelsius * (9 / 5)) + 32;
    return fahrenheit.toPrecision(3);
}
console.log(convertCtoF());
console.log(convertCtoF(1));

let openBrowser = browserName =>
{
    switch (browserName)
    {
        case 'chrome':
            console.log('chrome launched');
            return true;

        default:
            console.log('invalid browser');
            return false;
    }
}
console.log(openBrowser('chrome'));