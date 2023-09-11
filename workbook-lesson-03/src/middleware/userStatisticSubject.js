const { dataStatistic, data } = require("../data/data");

const userStatisticSubject = (req, res, next) => {
  const { apiKey } = req.params;
  const findUser = data.find((user) => {
    return user.apiKey == apiKey;
  });
  const findUserStatistic = dataStatistic.find((user) => {
    return user.user == findUser.username;
  });
  findUserStatistic.subject += 1;
  next();
};

module.exports = userStatisticSubject;
