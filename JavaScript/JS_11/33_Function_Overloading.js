// // function overloading is not possible in JS

// function login(){
//     console.log('login to app 1 ');
// }

// function login(){
//     console.log('login to app 2');
// }

// login(); //syntax error - login has been already declared
console.log('==========Fn Overloading is not Allowed Syntax Error==========');

// function login(){
//     console.log('login to app 1 ');
// }

// function login(a){
//     console.log('login to app 2');
// }

//login(); //syntax error - login has been already declared

console.log('==========Solution: Using Arguments Object==========');

function login() {
    if (arguments.length === 0) {
        console.log('default login to app');
    }
    else if (arguments.length === 2) {
        console.log(`login with : ${arguments[0]} and ${arguments[1]}`);
    }
    else if (arguments.length === 3) {
        console.log(`login with : ${arguments[0]} and ${arguments[1]} and ${arguments[2]}`);
    }
    else {
        console.log('plz supply the right type of values to login to app');
    }
}

login();                            // Output: default login to app
login('admin', 'admin123');         // Output: login with : admin and admin123
login('naveen', 'pw@123', 9090);    // Output: login with : naveen and pw@123 and 9090
login('admin');                     // Output: plz supply the right type of values...

console.log('==========Function with default parameters==========');

function myLogin(un = null, pwd = null) {
    if (un && pwd) {
        console.log('login with ' + un +' ' + pwd);
    } else {
        console.log('not allowed');
    }
}

myLogin('admin');                   // Output: not allowed

console.log('==========Function with diff function expressions==========');

let login1 = function login() {
    console.log('login to app1');
}

let login2 = function login(a){
    console.log('login to app2 +' + a);
}

login1();
login2(1000);

