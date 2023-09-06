const data = require("../data/UsersData.js");

const userId = (req, res) => {
  const findUserId = data.find((userData) => {
    return (req.params.id == userData.id);
  });
  res.json(findUserId);
};

module.exports = userId;
