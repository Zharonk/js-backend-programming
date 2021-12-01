const fruits = require("./data.js");

const index = () => {
    for (const fruit of fruits){ //bisa pake for each fruits.forEach((fruit)) => console.log(fruit)
        console.log(fruit);
    }
}

const store = (name) =>{
    fruits.push(name);
    index()
}

module.exports = {index, store}; //klo gk ditaro object ({}) bakal error