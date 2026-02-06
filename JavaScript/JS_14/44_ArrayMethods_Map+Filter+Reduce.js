let score = [85, 92, 67, 78, 95, 43, 88, 76, 91, 82];

// get the passing score (score >= 70), add 5 numbers as bonus, then calculate average

let passing_score = score.filter(ele => ele >= 70);
console.log(passing_score);
passing_score = score.filter(ele => ele >= 70).map(ele => ele + 5);
console.log(passing_score);

let avg = passing_score.reduce((sum, ele) => sum + ele, 0) / passing_score.length;
console.log(avg);
avg = 0;
avg = score.filter(ele => ele >= 70)
    .map(ele => ele + 5)
    .reduce((sum, ele) => sum + ele, 0) / score.filter(ele => ele >= 70).length;

console.log(avg);

let prices = [25, 60, 15, 80, 35, 120, 45, 90];
//get the lower price (price < 50), apply 10% discount, calculate total

let totalBilling= prices.filter(ele => ele < 50)
    .map(ele => ele * 0.9)
    .reduce((total, ele) => total + ele, 0);

console.log(totalBilling);

let dict = ['WDIO', 'js', 'playwright', 'git', 'selenium', 'cypress'];
//get the long words(length >4) --> convert to upper case & join with '-'

