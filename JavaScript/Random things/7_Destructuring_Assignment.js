let options = {
    title: 'Menu',
    height: 200,
    weight: 100
};

let { title: iTitle, height: iHeight, weight: iWeight, city = ['Zurich', 'Paris'] } = options;

console.log(city);
console.log(iTitle + ", " + iHeight + ', ' + iWeight);