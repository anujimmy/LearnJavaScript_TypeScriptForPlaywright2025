//callback examples

function startMachine (callback)
{
    console.log('starting the machine !!!!');
    callback();

}
//arrow function
startMachine(() =>{
    console.log('Machine is started !!!!');
});

//anonymous function
startMachine(function () {
    console.log('Machine is starting...Plz wait!!!');
});

function getInfo (callback)
{
    console.log('getting some info!!!');
}

getInfo(() => { });

function getDetails (hogwarts)
{
    console.log('getting some details .....');
    hogwarts('hello', 'playwright');
}
//arrow function passed as callback
getDetails((a, b) =>
{
    console.log(a);
    console.log(b);
});


function getMarks (callback)
{
    console.log('my logic ,.....');
    callback(200);
    return 500;
}
let m1 = getMarks(num => console.log(num));
console.log(m1);
console.log(num);


function openPage (url, callback)
{
    console.log('app: url :' + url);
    let browser = callback('amazon login page');
    console.log(browser);
    return true;
}

let bFlag = openPage('https://www.amazon.com', (title) =>
{
    console.log('getting the page title !!!');
    console.log('expected title matches with actual - ' + title);
    return 'chrome';
});
console.log(bFlag);

//

setTimeout(() => { console.log('getting data from sheet'); }, 5000);
//to freeze page in debugger in chrome
setTimeout(() =>{
    debugger;
}, 5000);
