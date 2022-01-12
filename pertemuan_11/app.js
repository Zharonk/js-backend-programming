// import express
const bodyP = require("body-parser")
const express = require("express"); //ngambil dari node_modules ada "express"

//buat object/server
const app = express();

//middleware biar bisa nangkep data json
app.use(bodyP.json());

// definisikan port
app.listen(3000, ()=>{
    console.log("Server berjalan di: localhost:3000");
});

// pake routernya
const router = require("./routes/api");
app.use(router);