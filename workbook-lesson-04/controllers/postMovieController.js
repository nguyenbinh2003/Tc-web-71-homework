const { data } = require("../data/data");
const { v4: uuidv4 } = require("uuid");

const postMovieController = (req, res) => {
  const post = {
    id: uuidv4(),
    ...req.body,
  };
  data.push(post);
  res.json({
    message: "Add new successful movies",
  });
};

module.exports = postMovieController;
