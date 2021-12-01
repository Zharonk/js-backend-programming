const user = {
    nama : "Zharonk",
    umur : "unknown",
    alamat : "Depok"
}
/*  ini kalo di buat var 1 1
const nama = user.nama;
const umur = user.umur;
const alamat = user.alamat;
 */

 // pake destruction bisa langsung gini
const {nama, umur, alamat} = user;
console.log(nama, umur, alamat);