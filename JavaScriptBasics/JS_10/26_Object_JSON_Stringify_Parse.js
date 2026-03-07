let person = {
    name: 'tom',
    age: 70,
    salary: 34.78,
    isEmployed: false,
    status: 'pending',
    // address: {
    //     city: 'delhi',
    //     postcode: 123456,
    //     area: {
    //         areaname: 'new area'
    //     }
    // }

};
// js object to JSON string - marshelling
let jsonPerson = JSON.stringify(person);
console.log(jsonPerson + '    is a  ' + typeof (jsonPerson));

//JSON string to js object - unmarshelling

let personObj = JSON.parse(jsonPerson);
console.log(personObj + '   is a   ' + typeof (personObj));

