const family = ["Mikel", "Hannah", "Jonas", "Martha"];
/* ini klo inisial 1 1
const suami = family[0];
const istri = family[1]; */

// pake destruct
const [suami, istri, anak1, anakLast] = family;
console.log(suami, istri, anak1, anakLast);