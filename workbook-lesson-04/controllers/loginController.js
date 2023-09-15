const jwt = require("jsonwebtoken");
const { dataUsers } = require("../data/data");

const loginController = (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return res.status(400).json({
      message: "Missing required keys",
    });
  }
  const existingUser = dataUsers.find((user) => {
    return user.userName == userName && user.passWord == password;
  });
  if (!existingUser) {
    return res.json({
      message: "userName or password does not correct !",
    });
  }

  const payload = {
    id: existingUser.id,
    userName: existingUser.userName,
    role: existingUser.role,
  };
  const SECRET_KEY = process.env.SECRET_KEY;
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: "120s",
  });

  res.json({
    message: "Login successfully",
    accessToken: token,
  });
};

module.exports = loginController;
