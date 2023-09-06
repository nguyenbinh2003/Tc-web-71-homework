let data = require("../data/UsersData");
const fs = require("fs");

const deleteData = (req, res) => {
  const id = parseInt(req.params.id);
  const findId = data.findIndex((data) => {
    return data.id == id;
  });
  if (findId != -1) {
    data.splice(findId, 1);
    res.status(200).send("Người dùng đã được xóa thành công.");
  } else {
    res.status(404).send("Không tìm thấy người dùng.");
  }
};

module.exports = deleteData;
