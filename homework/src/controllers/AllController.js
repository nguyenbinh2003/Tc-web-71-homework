const data = require("../data/UsersData.js");

const allController = (req, res, next) => {
  switch (req.query.q) {
    case "phone":
    case "role":
      const filterDataRolePhone = data.filter((data) => {
        return data.role == 2 && data.info.phone !== "";
      });
      const newDataRolePhone = JSON.parse(JSON.stringify(filterDataRolePhone));
      return res.json(newDataRolePhone);
    case "active":
      const filterDataActive = data.filter((data) => {
        return data.status == "active";
      });
      const newDataActive = JSON.parse(JSON.stringify(filterDataActive));
      return res.json(newDataActive);
    case "age":
      const filterDataAge = data.filter((data) => {
        return data.info.age >= 19 && data.info.age <= 29;
      });
      const newDataAge = JSON.parse(JSON.stringify(filterDataAge));
      return res.json(newDataAge);
    default:
      break;
  }
  res.json(data);
};

module.exports = allController;
