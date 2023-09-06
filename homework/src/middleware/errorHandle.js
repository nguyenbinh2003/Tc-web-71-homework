const errorHandle = (req, res, next) => {
  res.status(404);
  res.json({ mesasgeError: "Error", data: null });
};

module.exports = errorHandle;
