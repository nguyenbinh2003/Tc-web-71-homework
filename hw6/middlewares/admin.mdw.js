const adminMdw = (req, res, next) => {
  const role = req.user;
  if (role == "admin") {
    next();
  } else {
    res.status(400).json({
      message: "Your account does not have access rights",
    });
  }
};

module.exports = adminMdw;
