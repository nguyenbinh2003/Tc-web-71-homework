const express = require("express");
const studentRouter = require("./student.router");
const subjectRouter = require("./subject.router");
const teacherRouter = require("./teacher.router");
const systemStatistic = require("../controllers/systemStatistic");
const userStatisticStudent = require("../middlewares/userStatisticStudent");
const userStatisticSubject = require("../middlewares/userStatisticSubject");
const userStatisticTeacher = require("../middlewares/userStatisticTeacher");
const checkApiKey = require("../middlewares/checkAPIkey.js");

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
