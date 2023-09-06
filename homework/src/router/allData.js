const express = require("express");
const router = express.Router();

const allUsers = require("../controllers/AllController.js");
const postData = require("../controllers/PostController.js");
const putData = require("../controllers/PutController.js");
const deleteData = require("../controllers/DeleteController.js");
const deleteDataUsers = require("../controllers/DeleteDataController.js")

router.get("/delete", deleteDataUsers);
router.post("/post", postData);
router.put("/put/:id", putData);
router.put("/put/", putData);
router.delete("/delete/:id", deleteData);
router.get("/", allUsers);

module.exports = router;
