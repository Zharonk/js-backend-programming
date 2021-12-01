const {index, store} = require("./FruitController.js");
// bisa juga const hasilImport = require ... || tpi dia nanti bakal manggilnya hasilImport.index() (Ribet)

function main() {
    index();
    store("Coconut");
}

main();

