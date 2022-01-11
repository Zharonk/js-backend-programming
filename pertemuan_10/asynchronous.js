// operasi yang dilakukan tanpa menunggu operasi lain keluar sehingga operasi seakan2 paralel

//setTimeOut salah satu operasi Asyn
/*
console.log("Satu");

//setTimeout (callback, rentang waktunya)
setTimeout(function(){
    console.log("Dua");
}, 3000); //3000ms

console.log("Tiga");

*/

/**
 * fungsi setTimeout tidak mencegah operasi selanjut.
 * callback otomatis dijalankan setelah 5detik.
 */
console.log("Zharonk buka browser");

setTimeout(()=>{
    console.log("Download 1jam");
    console.log("Download selesai");
}, 5000);

console.log("Zharonk buka youtube");