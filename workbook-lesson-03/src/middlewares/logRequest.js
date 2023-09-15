const logRequest = (req, res, next) => {
  console.log(`method : ${req.method}, date : ${new Date()}`);
  next();
};

module.exports = logRequest;
