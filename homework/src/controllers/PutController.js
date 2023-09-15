const data = require("../data/UsersData.js");

const putData = (req, res) => {
  const { id } = req.params;
  const { favorites } = req.body;
  if (id) {
    const findId = data.find((data) => {
      return data.id == id;
    });
    if (findId) {
      findId.info.phone = "0999999999";
    }
    res.json(data);
  } else if (favorites) {
    const findId = data.find((data) => {
      return data.id == 4;
    });
    if (findId) {
      findId.info.favorites = favorites;
    }
    res.json(data);
  }
};

module.exports = putData;
