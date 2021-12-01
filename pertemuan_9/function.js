// function declaration
/*
function hitungLuas(r){
    const hasil = 3.14 * r * r;

    return hasil;
}
*/

// ini pake expression (nyimpen fungsi ke variabel kek lambda)
/* const hitungLuas = function(r){
    const hasil = 3.14 * r * r;

    return hasil;
}*/

// Arrow Function (dahulukan pake arrow function)
const hitungLuas = (r = 1) =>3.14 * r * r; // klo cmn 1 baris bisa gini tanpa return dan kurung kurawal

console.log(hitungLuas(5)); 
console.log(hitungLuas());