const express = require("express");
const teacherRouter = require("../controllers/TeacherController");

const router = express.Router();

router.use("/", teacherRouter);

module.exports = router;
