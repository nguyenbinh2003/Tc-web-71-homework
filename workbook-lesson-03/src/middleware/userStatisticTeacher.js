const { dataStatistic, data } = require("../data/data");

const userStatisticTeacher = (req, res, next) => {
  const { apiKey } = req.params;
  const findUser = data.find((user) => {
    return user.apiKey == apiKey;
  });
  const findUserStatistic = dataStatistic.find((user) => {
    return user.user == findUser.username;
  });
  findUserStatistic.teacher += 1;
  next();
};

module.exports = userStatisticTeacher;
