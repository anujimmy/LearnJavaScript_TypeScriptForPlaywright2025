//object has a body and a reference name
//properties : key-value
//function(behaviour) - actions
let user = {
    name: 'harry',
    age: 30,
    salary: 34.55,

    coding: function IsCoder() {
        console.log(`${this.name} is writing code using js`);
    },

    print_CTC(ctc) {
        console.log('your currrent CTC is ' + ctc);
        let finalSal = ctc + this.salary;
        return finalSal;
    },
    /**
     * to print the sports played by user - no return values
     * @param {string} sportsName 
     */
    playing: function (sportsName) {
        console.log(`${this.name} is playing ${sportsName.trim().toUpperCase()}`);
    },
    /**
     * 
     * @param {number} speed 
     */
    walking: (speed = 5) => {
        console.log(`${user.name} is walking with a speed of ${speed}km/hr`); //this.name wont work in arrow function so please use user.name
    }

};
user.coding();
console.log(user.name + ', ' + user['age'] + ', ' + user.salary);
user['coding']();
let sal = user.print_CTC(10);
console.log(sal);

user.playing('football')
user.walking(20);
user.walking();

console.log('===================================');

let loginPage = {
    emailXpath: `\\input[@id ='username']`,
    passwordXpath: `\\input[@id ='password']`,
    loginbtnXpath: `\\input[@id ='login-btn']`,

    logintoWebApp(username, password) {
        console.log(`entering ${username} into element : ${this.emailXpath}`);
        console.log(`entering ${password} into element : ${this.passwordXpath}`);
        console.log(`click on login button using element : ${this.loginbtnXpath}`);
        console.log(`login is done using : ${username} & ${password}`);

        console.log(user.name + ':' + user.age);
        user.coding();
    }


}

loginPage.logintoWebApp("testadmin@gmail.com", 'test123');

