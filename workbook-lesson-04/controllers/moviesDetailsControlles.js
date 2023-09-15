const { data } = require("../data/data");

const movieDetailsController = (req, res) => {
  const { id } = req.params;
  const findMovie = data.find((movie) => {
    return movie.id == id;
  });
  if (findMovie) {
    res.json(findMovie);
  } else {
    res.send("The movie doesn't exist !");
  }
};

module.exports = movieDetailsController;
