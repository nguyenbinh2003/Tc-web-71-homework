const express = require("express");
const router = express.Router();
const authRoute = require("./auth.route");
const moviesRoute = require("./movies.route")

router.use("/auth", authRoute);
router.use("/movies", moviesRoute);

module.exports = router;
