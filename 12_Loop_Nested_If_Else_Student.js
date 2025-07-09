//nested if - if - if - else - if - if- else
let marks = 97;

if (marks >= 90) {
    console.log('grade A');
    if (marks >= 95) {
        console.log('grade A++');
        if (marks === 100) {
            console.log('eligible for scholarship');
        }
        else {
            console.log('not eligible for scholarship');
        }
    }
}
else {
    if (marks >= 80) {
        console.log('grade B');
    }
    else {
        if (marks >= 70) {
            console.log('grade B');
        }
    }
}