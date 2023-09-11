const { dataStatistic, data } = require("../data/data");

const userStatisticStudent = (req, res, next) => {
  const { apiKey } = req.params;
  const findUser = data.find((user) => {
    return user.apiKey == apiKey;
  });
  console.log(findUser);
  const findUserStatistic = dataStatistic.find((user) => {
    return user.user == findUser.username;
  });
  findUserStatistic.student += 1;
  next();
};

module.exports = userStatisticStudent;