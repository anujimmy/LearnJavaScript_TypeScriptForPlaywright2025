let strBrowser = "chromium";


switch (strBrowser.toLowerCase().trim()) {
    //console.log("if control comes here");
    case "chrome","chromium":
        console.log("chrome is launched");  
        break;
    case "firefox":
        console.log("FF is launched");
        break;
    case "safari":
        console.log("Safari is launched");
        break;
    default:
        console.log("please pass the correct browser name - " + strBrowser);
        break;
    case "edge":
        console.log("Edge is launched");
        break;
}

console.log('===========');

//0 to 100 - conditonal values are not allowed in case
let marks = 100;
switch (marks) {
    case (marks < 35):
        console.log('fail');
        break;
    case (marks>90):
        console.log('A+');
        break;
    case (100):
        console.log('AAA+');
        break;
    default:
        console.log('bye marks!');
        break;
}

console.log('===========');

let isActive = true;//false
switch (isActive) {
    case true:
        console.log('pass');
        break;
    case false:
        console.log('fail');
        break;
    default:
        console.log('no result');
        break;
}



//use cases for switch case:
//1. cross browser logic
//2. cross os/platforms: win/linux/mac
//3. cross system: local, remote
//4. cross environment: dev/qa/stage/uat/prod
//5. RBAC: user permission: admin, customer, seller, partner, vendor, distributor, guest
//6. locator strategy: id, name, role, text, xpath, css
//7. testing type: sanity, smoke, regression, ui, api, mobile
//8. uber app: booking type: mini, sedan, suv, bike
//9. payment: upi, paypal, cc, debit, wire, stripe, cash
//10. loan type: home: 8%, car: 10%, edu: 6%

//if-else:
//one single conditon
// if (user === 'admin') {
    
// }
//numbering: student marks: 1 to 100

//voting logic: >=18
let age = 20;
if (age >= 18) {
    console.log('eligibe for voting');
}
else {
    console.log('eligibe for voting');
}