const { data } = require("../data/data");

const putMovieController = (req, res) => {
  const { id } = req.params;
  const findId = data.find((data) => {
    return data.id == id;
  });
  if (findId) {
    findId = req.body;
    res.json({
      message: "Update successful movies",
    });
  } else {
    res.status(400).json({
      message: "Movie not found",
    });
  }
};

module.exports = putMovieController;
