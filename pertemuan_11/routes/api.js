const StudentController = require("../controllers/StudentController"); // ngambil yang dari StudentController

const express = require("express");
//buat routing modular
const router = express.Router();

//definisikan routing
router.get("/", function(req, res){
    res.send("Hello express"); //res buat membuat respon, kalo send buat nampilin tulisan
});


/* router.get("/students", function(req, res){ // si Studentcontroller bisa langsung jadi callback jadi gk perlu function (req, res) lgi
     StudentController.index(req, res);
 }); */

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

module.exports = router;