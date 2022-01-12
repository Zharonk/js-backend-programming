// import model Student
const Student = require("../models/Student");

// TODO 3 (11): Import data students dari folder data/students.js
// const students = require("../data/students");

class StudentController{
    // TODO 4 (11): Tampilkan data students
    async index(req, res){
        const students = await Student.all();

        const data = {
            message : "Menampilkan semua Students",
            data : students,
        };
        res.status(200).json(data); // ini chaining
    }

    async store(req, res){
        /**
        * TODO 2 (12): memanggil method create.
        * Method create mengembalikan data yang baru diinsert.
        * Mengembalikan response dalam bentuk json.
        */
        const students = await Student.create(req.body);

        const data = {
            message : `Menambahkan data Students`,
            data : students
        };

        res.status(201).json(data);
    }

    update(req, res){
        const {id} = req.params; // di destructing
        const {nama} = req.body;

        // TODO 6: Update data students
        students[id] = nama;

        const data = {
            message : `Mengedit data students id : ${id}, nama : ${nama}`,
            data : students
        };

        // res.json("Mengedit data Students" + id);
        res.json(data);
    }

    destroy(req, res){
        const {id} = req.params; // di destructing

        // TODO 7: Hapus data students
        students.splice(id, 1);

        const data = {
            message : `Menghapus data students ${id}`,
            data : students
        };

        // res.json("Menghapus data Students" + id);
        res.json(data);
    }
    
}

//buat object student Controller
const obj = new StudentController();

//export object student COntroller
module.exports = obj;