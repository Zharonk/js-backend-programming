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

    async show(req, res) {
        const { id } = req.params;
    
        // cari student berdasarkan id
        const students = await Student.find(id);
    
        if (students) {
          const data = {
            data: true,
            message: `Menampilkan detail students`,
            data: students,
          };
          res.status(200).json(data);
        }
        const gagal = {
          message: `Student dengan id ${id} not found`,
        };
    
        res.status(404).json(gagal);
      }

    async update(req, res){
        const {id} = req.params; // di destructing
        // const {nama} = req.body;
        const students = await Student.find(id);
        if (students) {
            const students = await Student.update(id, req.body);
            const data = {
            message : `Mengedit data students id : ${id}`,
            data : students
        };
        // res.json("Mengedit data Students" + id);
        res.status(200).json(data);
    } const gagal = {
        message: `Students dengan id ${id} not found`,
      };
  
      res.status(404).json(gagal);

    }

    async destroy(req, res){
        const {id} = req.params; // di destructing
        const students = await Student.find(id);
        
        if (students) {
            await Student.delete(id);
            const data = {
                message : `Menghapus data students ${id}`,
                data : students
            };
            res.status(200).json(data);
        }const gagal = {
            message: `Student dengan id ${id} not found`,
          };
          res.status(404).json(gagal);
    }
    
}

//buat object student Controller
const obj = new StudentController();

//export object student COntroller
module.exports = obj;