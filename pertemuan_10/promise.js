//promise = objek yang mengembalikan nilai dimasa mendatang (kek janji aja)
// solusi pengganti callback (biar gk kena callback hell)
/*
promise dibagi jadi 2:
producing = membuat/mengehasilkan promise
consuming = menggunakan/mengkonsumsi promise

statenya 3:
pending = ketika promise berjalan
Fullfilled = ketika promise berhasil (resolve)
Rejected = ketika promise gagal (reject)
*/


    const download = () => {
        return new Promise(function(resolve, reject){
            const status = true;
        
            setTimeout(()=>{
                if (status) {
                    resolve("Download selesai");
                }
                else{
                    reject("Download Gagal");
                }
            }, 5000);
        });
    }

    //buat konsum promise
    download()
    .then(function(result){ //dia nangkap dari resolve
        console.log(result);
    })
    .catch(function(result){ //nangkep dari reject
        console.log(result);
    });