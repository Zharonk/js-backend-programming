// TODO 3: Import data students dari folder data/students.js
const students = require("../data/students")

class StudentController{
    // TODO 4: Tampilkan data students
    index(req, res){
        const data = {
            message : "Menampilkan semua Students",
            data : students
        };
        res.json(data);
    }

    store(req, res){
        // TODO 5: Tambahkan data students
        const {nama} = req.body;
        students.push(nama);

        const data = {
            message : `Menambahkan data Students ${nama}`,
            data : students
        };

        res.json(data);
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