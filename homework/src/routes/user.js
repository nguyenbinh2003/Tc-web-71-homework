const express = require("express");
const router = express.Router();

const userId = require("../controllers/UserController.js");

router.get("/:id", userId);

module.exports = router;
