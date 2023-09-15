const { dataUsers } = require("../data/data");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");

const registerController = (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).json({
      mesasge: "Missing required keys",
    });
  }
  const findUser = dataUsers.find((u) => {
    return u.userName == userName;
  });
  if (findUser) {
    return res.status(400).json({
      mesasge: "User already exists",
    });
  }
  dataUsers.push({
    id: uuidv4(),
    role: "user",
    userName: userName,
    passWord: password,
  });

  const payload = {
    id: uuidv4(),
    userName: userName,
    role: "user",
  };
  const SECRET_KEY = process.env.SECRET_KEY;
  const token = jwt.sign(payload, SECRET_KEY, {
    expiresIn: "120s",
  });
  res.json({
    mesasge: "Register successfully",
    accessToken: token,
  });
};

module.exports = registerController;
