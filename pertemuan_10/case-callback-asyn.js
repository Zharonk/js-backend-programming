// asyn bagus karena bisa jalan parelel
//tapi jadi masalah kalo operasinya itu saling berkaitan (jadi mesti dihandle) (misal masak mie, kan mesti berurutan ngerebus -> masak) (nah solusinya itu pake callback(OLD)/promise/asynawait)


// const persiapan = () => {
//     setTimeout(()=>{
//         console.log("Persiapan ...");
//     }, 3000);
// } bakal jadi masalah klo gini. timeoutnya di taro di main aja
/*
const persiapan = () => console.log("Persiapan ...");

const rebusAir = () => console.log("Merebus Air ...");

const masak = () => {
        console.log("Masak mie");
        console.log("Selesai");
};

function main() {
    setTimeout(()=> {
        persiapan();
        
        setTimeout(()=>{
            rebusAir();
            
            setTimeout(()=>{
                masak();
                
            }, 3000);
        }, 7000);
    },5000)
};

main();
*/

//ini masih dikit tapi klo lebih dari ini bakal stress = CALLBACK HELL (terjebak di callback) makanya ini caranya OLD

    const persiapan = () => {
        return new Promise(function(resolve, reject){
            setTimeout(()=>{
                resolve("Persiapan ...");
            }, 3000);
        });
    }

    const rebusAir = () => {
        return new Promise(function (resolve, reject){
            setTimeout(()=>{
                resolve("Merebus Air ...");
            }, 7000);
        });
    }

    const masak = () => {
        return new Promise (function(resolve, reject){
            setTimeout(()=>{
                resolve(`Masak mie
Selesai`);
            }, 5000);
        });
    }

/* 
    function main(){
        persiapan()
        .then(function(result){
            console.log(result);
            return rebusAir();
        })
        .then(function(result){
            console.log(result);
            return masak();
        })
        .then(function(result){
            console.log(result);
        })

        .catch(function(err){
            console.log(err);
        });
    }
*/ //pusing kan klo pake promise, nah makanya ada asyn await yang berjalan diatas promise biar gampang dibaca

/**
 * async digunakan untuk memberitahu ada proses asynchronous
 * await digunakan untuk menunggu promise selesai
 * await hanya bisa digunakan di dalam function
 */
    async function main(){
        // const hasilPersiapan = await(persiapan);
        // console.log(hasilPersiapan);

        console.log(await persiapan());
        console.log(await rebusAir());
        console.log(await masak());
    }

    main();