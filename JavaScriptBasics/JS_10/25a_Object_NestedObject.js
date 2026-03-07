let user = {
    name: 'tom',
    age: 70,
    address: {
        city: 'delhi',
        PLZ: 123456,
        area: {
            areaname: 'new area'
        }
    }
};

console.log(user); //complete object is printed
console.log(user.name);
console.log(user.address);
console.log(user.address.PLZ);
console.log(user.address.area.areaname);

console.log(user?.address?.city); //delhi
console.log('=================');


