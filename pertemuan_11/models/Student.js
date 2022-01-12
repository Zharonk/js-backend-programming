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
   static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        const [students] = results;
        resolve(students);
      });
    });
  }

    static async create(data) {
        const id = await new Promise((resolve, reject) => {
          const sql = "INSERT INTO students SET ? ";
          db.query(sql, data, (err, results) => {
            if (err) reject(err);
            resolve(results.insertId);
          });
        });
    
        return new Promise((resolve, reject) => {
          const sql = "SELECT * FROM students WHERE id = ?";
          db.query(sql, id, (err, results) => {
            if (err) reject(err);
            resolve(results);
          });
        });
    }

    static async update(id, data) {
        await new Promise((resolve, reject) => {
          const sql = "UPDATE students SET ? WHERE id = ?";
          db.query(sql, [data, id], (err, results) => {
            resolve(results);
          });
        });
    
        const student = await this.find(id);
        return student;
      }
    
      static delete(id) {
        return new Promise((resolve, reject) => {
          const sql = "DELETE FROM students WHERE id = ?";
          db.query(sql, id, (err, results) => {
            resolve(results);
          });
        });
      }
    }
// export modelnya
module.exports = Student;