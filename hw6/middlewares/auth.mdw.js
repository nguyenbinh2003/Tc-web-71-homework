const jwt = require("jsonwebtoken");
const database = require("../models/dataCMS.model");

const authMiddleware = async (req, res, next) => {
  try {
    const accessToken = req.headers["x-access-token"];
    if (!accessToken) {
      return res.status(400).json({
        message: "Missing access token",
      });
    }
    const decoded = jwt.verify(accessToken, process.env.SECRET_KEY);
    const user = await database.findById({ _id: decoded.id });
    req.user = user;
    console.log(decoded);
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(400).json({
        message: "Token is expired",
      });
    } else {
      res.status(500).json({
        message: error.message,
        stack: error.stack,
      });
    }
  }
};

module.exports = authMiddleware;
