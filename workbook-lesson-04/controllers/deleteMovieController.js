const { data } = require("../data/data");

const deleteMovieController = (req, res) => {
  const { id } = req.params;
  const findId = data.findIndex((data) => {
    return data.id == id;
  });
  if (findId != -1) {
    data.splice(findId, 1);
    res.status(200).send("Movie deleted successfully");
  } else {
    res.status(404).send("Movie not found");
  }
};

module.exports = deleteMovieController;
