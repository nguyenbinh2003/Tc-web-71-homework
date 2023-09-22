var express = require("express");
var router = express.Router();
const data = require("./data.route");

/* GET home page. */
router.use("/", data);

module.exports = router;
