// import mysql dari package
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

//buat koneksinya
const db = mysql.createConnection({
    host: process.env.DB_HOST, // ngambil dari .env
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// connect to database
db.connect((err)=>{ // 'db' ngambil dari yang atas
    if (err) {
        console.log(`koneksi error: ${err}`);
        return;
    }
    else{
        console.log("Koneksi Berhasil");
    }
}
); 

//export db
module.exports = db;