const { data } = require("../data/data");

const moviesController = (req, res) => {
  res.json(data);
};

module.exports = moviesController;
