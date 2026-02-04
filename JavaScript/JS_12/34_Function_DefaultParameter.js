function print1(strName = 'Visitor') {
    console.log('hello  ' + strName);
};
print1();
print1('Anu');

console.log('----------------');

function openBrowser(browserName = 'chrome') {
    switch (browserName.trim().toLowerCase()) {
        case 'firefox':
            console.log('open ff');
            break;
        case 'edge':
            console.log('open edge');
            break;
        default:
            console.log('invalid browser - ' + browserName + ', running tests in chrome');
            break;
    }
}

openBrowser('edge');
openBrowser('ie');


// similarly we can write for Test Environments, Payment methods
// 