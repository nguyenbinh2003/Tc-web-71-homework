const fs = require("fs");

const logDate = (err, req, res, next) => {
  const date = new Date();
  const method = req.method;
  fs.writeFile(
    "test.txt",
    JSON.stringify({ method: method, date: date }),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
  next(err);
};

module.exports = logDate;
