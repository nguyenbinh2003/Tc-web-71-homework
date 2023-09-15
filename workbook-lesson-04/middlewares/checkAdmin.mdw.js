const { dataUsers } = require("../data/data");

const checkAdmin = (req, res, next) => {
  if (req.headers["role"] == "admin") {
    next();
  } else {
    res.json({
      message: "You do not have access !",
    });
  }
};

module.exports = checkAdmin;
