//fungsi yang dikirim sebagai parameter ke fungsi lain
//callback berjalan setelah fungsi main berjalan

const formatName= (name) => name.toUpperCase();


// function getName(name, callformatName){ //biar sebelum nampilin nama diformat dlu jdi upper case
//     const result = callformatName(name);
//     console.log(result);
// }
//mending gini
const getName = (name,callformatName) => console.log(callformatName(name));

getName("Zharonk", formatName); //parameter callback (callformatName) itu diisi ama fungsi formatName