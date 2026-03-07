//creating the object using the class

class Product{
    constructor(name,price){ // only 1 constructor is allowed
        this.name = name;
        this.price = price;
    }
}

//create the object of product uusing new keyword
//constructor will be called when you create the object

let p1 = new Product("macbook",1000);

console.log(p1.name + "is costed at $"+ p1.price);
console.log(p1);
console.log(typeof(p1));


//create an object without a reference name
new Product('iPhone',850);
new Product('samsung', 1500);

let p2 = new Product("macbook pro",1500);
console.log(p2);
p2.color = 'silver';
console.log(p2);

//there is no GC moethod in JS

//creating the object without reference - detroyed by GC - BAD PRACTICE
let pName = new Product("Apple iPad",800).name;
console.log(pName);

let pPrice = new Product("Apple Watch",1500).price;
console.log(pPrice);