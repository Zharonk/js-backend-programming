// import db
const db = require("../config/database");

class Student {
    static all(){ // ini dia pake static karena tidak melekat pada object, namun melekat pada class sehingga kita bisa mengakses method static tanpa membuat object. dan model ini berinteraksinya ama database jdi dibuat static aja (klo di controller itu kan interaksinya ama aplikasi makanya dijadiin method aja)
        return new Promise((resolve, reject)=>{ // promisenya di return biar bisa diakses sama controller
            // query db untuk ambil data
        const sql = "SELECT * from students"; //itu students dari table
        db.query(sql, (err, result)=>{
            resolve (result);
        });
        });

    }
    /**
    * TODO 1 (12): Buat fungsi untuk insert data.
    * Method menerima parameter data yang akan diinsert.
    * Method mengembalikan data student yang baru diinsert.
    */

   static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ? ";
      db.query(sql, data, (err, results) => {
        resolve(results);
      });
    });
    }
}
// export modelnya
module.exports = Student;