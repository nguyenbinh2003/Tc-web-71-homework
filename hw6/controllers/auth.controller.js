const bcrypt = require("bcrypt");
const database = require("../models/dataCMS.model");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { userName, password } = req.body || {};
  if (userName.length !== 0 && password.length !== 0) {
    const salt = await bcrypt.genSalt(10);
    const isPassword = await bcrypt.hash(password, salt);
    console.log(isPassword);
    const register = new database({
      role: "user",
      userName: userName,
      password: isPassword,
      report: req.body.report,
    });
    await register.save();
    res.json({
      message: "Registered successfully",
    });
  } else {
    res.status(400).json({
      message: "Registration failed",
    });
  }
};

const login = async (req, res) => {
  const { userName, password } = req.body || {};
  if (!userName || !password) {
    return res.status(400).json({
      message: "Missing required keys",
    });
  }
  const user = await database.findOne({ userName: userName });
  console.log(user);
  if (user) {
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    const SECRET_KEY = process.env.SECRET_KEY;

    const payload = {
      id: user._id,
      role: user.role,
      userName: user.userName,
    };
    const token = jwt.sign(payload, SECRET_KEY, {
      expiresIn: "120s",
    });
    res.json({
      message: "Logged successfully",
      token: token,
    });
  } else {
    res.status(400).json({
      message: "Login unsuccessful",
    });
  }
};

module.exports = { register, login };
