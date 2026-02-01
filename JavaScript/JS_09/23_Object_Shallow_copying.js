let wizard ={ name : 'Harry',
    house : 'slytherin'
};

let wizard1 ={ ...wizard};

wizard1.house = 'gryffindor';

console.log(wizard.house);
console.log(wizard1.house);