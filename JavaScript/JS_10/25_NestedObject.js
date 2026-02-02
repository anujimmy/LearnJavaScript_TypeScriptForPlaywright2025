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
//iterate through the nested object
let userPairs = Object.entries(user);
let userValues = Object.values(user);
let iPair = 0;
while (iPair < userPairs.length) {
    // console.log(userPairs[iPair]);
    // console.log(typeof(userValues[iPair]));
    if (typeof (userValues[iPair]) != 'object') {
        if (userPairs[iPair].length === 2) {
            console.log(userPairs[iPair][0] + " :   " + userPairs[iPair][1]);
        }else{
            console.log('Error pls check - '+ userPairs[iPair] );
        }
    } else if ((typeof (userValues[iPair]) === 'object')) {
        console.log(userPairs[iPair][0] + " :   " );
        let iValues = Object.values(userPairs[iPair][1]);
        let iKeys = Object.keys(userPairs[iPair][1]);
        for (let i in iValues){
            if(typeof(iValues[i]) != 'object'){
                console.log(iKeys[i]+ " :   " + iValues[i]);
            }else{
                console.log('object found again !!!');
            }
        }

    }
    iPair++;
}

