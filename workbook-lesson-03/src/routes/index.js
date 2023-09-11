const express = require("express");
const studentRouter = require("./student.router");
const subjectRouter = require("./subject.router");
const teacherRouter = require("./teacher.router");
const systemStatistic = require("../controllers/systemStatistic");
const userStatisticStudent = require("../middleware/userStatisticStudent");
const userStatisticSubject = require("../middleware/userStatisticSubject");
const userStatisticTeacher = require("../middleware/userStatisticTeacher");
const checkApiKey = require("../middleware/checkAPIkey.js");

const router = express.Router();

router.use(
  "/student/:apiKey",
  checkApiKey,
  userStatisticStudent,
  studentRouter
);
router.use(
  "/teacher/:apiKey",
  checkApiKey,
  userStatisticTeacher,
  teacherRouter
);
router.use(
  "/subject/:apiKey",
  checkApiKey,
  userStatisticSubject,
  subjectRouter
);
router.use("/system/statistic", systemStatistic);

module.exports = router;
