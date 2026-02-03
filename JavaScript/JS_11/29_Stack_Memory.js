// function testing() {
//     console.log('hello');
//     pop();
// }

// function pop() {
//     console.log('pop');
//     testing();
// }

// //call this function:
// testing();//will be executed in stack memory

function rest() {
    console.log('rest');
    testing();
}

function testing() {
    console.log('hello');
    pop();
}

function pop() {
    console.log('pop');
    rest();
}

testing();

//login-search-addtocart-payment-order-logout - end

//function is calling itself - recursion
function login() {
    console.log('login to app');
    login();
}

login();