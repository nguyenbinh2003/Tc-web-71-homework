const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student.controller");

router.post("/update", studentController.updateReport);
router.get("/", studentController.getAllReport);

module.exports = router;
