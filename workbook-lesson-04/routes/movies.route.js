const express = require("express");
const router = express.Router();

const movies = require("../controllers/moviesController");
const movieDetails = require("../controllers/moviesDetailsControlles");
const authMiddleware = require("../middlewares/auth.mdw");
const deleteMovie = require("../controllers/deleteMovieController");
const postMovie = require("../controllers/postMovieController");
const checkAdmin = require("../middlewares/checkAdmin.mdw");
const putMovie = require("../controllers/putMovieController");

router.post("/post", checkAdmin, postMovie);
router.get("/:id", authMiddleware, movieDetails);
router.put("/put/:id", checkAdmin, putMovie);
router.delete("/delete/:id", checkAdmin, deleteMovie);
router.get("/", movies);

module.exports = router;
