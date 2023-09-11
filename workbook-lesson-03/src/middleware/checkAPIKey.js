const { data } = require("../data/data");

const checkAPIKey = (req, res, next) => {
  const { apiKey } = req.params;
  const findApiKey = data.find((user) => {
    return user.apiKey == apiKey;
  });
  if (findApiKey) {
    next();
  } else {
    res.status(404).send("API key is required !");
  }
};

module.exports = checkAPIKey;
