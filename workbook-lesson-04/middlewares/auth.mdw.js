const jwt = require("jsonwebtoken");
const { data } = require("../data/data");

const authMiddleware = (req, res, next) => {
  const { id } = req.params;
  const findMovieFree = data.find((movie) => {
    return movie.id == id;
  });
  if (req.header["role"] == "admin" || findMovieFree.isFree == true) {
    return next();
  } else {
    try {
      console.log(req.headers);
      const accessToken = req.headers["x-access-token"];
      if (!accessToken) {
        return res.status(400).json({
          message: "Missing access token",
        });
      }
      const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        return res.status(400).json({
          message: "Token is expired",
        });
      } else {
        return res.status(500).json({
          error: error.message,
          stack: error.stack,
        });
      }
    }
  }
};

module.exports = authMiddleware;
