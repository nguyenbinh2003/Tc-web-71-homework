const allUsersRouter = require("./AllData");
const user = require("./user");
const logDate = require("../middleware/logDate");

const router = (app) => {
  app.use("/user", logDate, user);
  app.use("/", logDate, allUsersRouter);

};

module.exports = router;
