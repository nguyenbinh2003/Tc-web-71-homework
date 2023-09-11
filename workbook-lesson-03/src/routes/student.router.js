const express = require("express");
const studentRouter = require("../controllers/StudentController");

const router = express.Router();

router.use("/", studentRouter);

module.exports = router;
