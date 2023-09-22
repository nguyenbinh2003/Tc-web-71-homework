var express = require("express");
var router = express.Router();
const dataController = require("../controllers/data.controller");

router.post("/create", dataController.createData);
router.get("/zipcode", dataController.getDataByzipcode);
router.get("/cuisine", dataController.getDataByCuisine);
router.get("/borough", dataController.getDataByorough);
router.get("/street", dataController.getDataStreet);
router.get("/grades", dataController.getDataGrades);
router.get("/:id", dataController.getDataById);
router.get("/", dataController.getAllData);

module.exports = router;
