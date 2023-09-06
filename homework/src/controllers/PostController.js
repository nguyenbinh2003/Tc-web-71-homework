const data = require("../data/UsersData");
const { v4: uuidv4 } = require("uuid");

const postData = (req, res) => {
    data.push({
      id: uuidv4(),
      ...req.body,
    });
  res.json(data);
};

module.exports = postData;
