const express = require("express");
const subjectRouter = require("../controllers/SubjectController");

const router = express.Router();

router.use("/", subjectRouter);

module.exports = router;
