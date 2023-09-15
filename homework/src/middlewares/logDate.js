const fs = require("fs");

const logDate = (req, res, next) => {
  const date = new Date();
  const method = req.method;
  fs.writeFile(
    "logDate.txt",
    JSON.stringify({ method: method, date: date }),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
  next();
};

module.exports = logDate;
