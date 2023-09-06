const data = require("../data/UsersData");

const deleteData = (req, res) => {
  if (req.query.q == "HN") {
    data.forEach(() => {
      const findIndex = data.findIndex((user) => {
        return (user.info.address = "HN");
      });
      if (findIndex != -1) {
        data.splice(findIndex, 1);
        return res.status(200).send("Người dùng đã được xóa thành công.");
      } else {
        return res.status(404).send("Không tìm thấy người dùng.");
      }
    });
  }
};

module.exports = deleteData;
