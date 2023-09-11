const { dataStatistic } = require("../data/data");

const systemStatistic = (req, res) => {
  res.json(dataStatistic);
};

module.exports = systemStatistic;
