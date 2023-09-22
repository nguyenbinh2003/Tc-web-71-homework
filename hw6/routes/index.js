const express = require("express");
const router = express.Router();
const students = require("./student.route");
const teachers = require("./teacher.roule");
const auth = require("./auth.route");
const authMiddleware = require("../middlewares/auth.mdw");
const adminMdw = require("../middlewares/admin.mdw");

router.use("/students", authMiddleware, students);
router.use("/teachers", authMiddleware, adminMdw, teachers);
router.use("/auth", auth);

module.exports = router;
