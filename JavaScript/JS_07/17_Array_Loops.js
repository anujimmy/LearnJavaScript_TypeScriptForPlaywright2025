//print all the vlaues from an array : use loops

let mybrowser = ['ie', 'chrome', 'ff', 'safari', 'opera', 'edge'];

//1. index loop
console.log('------1. index loop');
for (let iBr = 0; iBr < mybrowser.length; iBr++) {
    console.log(mybrowser[iBr]);
    if (mybrowser[iBr] === 'safari') {
        console.log("run in headless mode");
        break;
    }
}

let emp = ['anu', 'sita', 'gita', 'maya', 'chris'];
for (let i = emp.length - 1; i >= 0; i--) {
    console.log(emp[i]);
}

//2. for ... of loop ----> values
console.log('------2. for ... of loop------');
for (let e of mybrowser) {
    console.log(e);
    if (e === 'ie' || e === 'opera') {
        console.log(e + " - this browser is not supported");
    }
}

//2. for ... in loop. ----> index
for (let i in emp) {
    console.log(i + " --> " + emp[i]);
}