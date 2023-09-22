const datas = require("../models/model");

const dataController = {
  getAllData: (getAllData = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const count = await datas.countDocuments({});
    const totalPages = Math.ceil(count / limit);

    await datas
      .find({})
      .skip(skip)
      .limit(limit)
      .then((restaurant) => {
        res.json({
          restaurant: restaurant,
          pagination: {
            totalDatas: count,
            limit,
            currentPage: page,
            totalPages,
          },
        });
      });
  }),
  createData: (createData = async (req, res) => {
    if (req.body) {
      const createData = new MyDatas(req.body);
      await createData.save();
      res.json({
        message: "successfully created",
      });
    } else {
      res.send("No data");
    }
  }),
  getDataById: (getDataById = async (req, res) => {
    const { id } = req.params;
    const existingPost = await datas.findById({ _id: id });
    if (!existingPost) {
      res.json({
        messaga: "Post not found !",
      });
    } else {
      res.json(existingPost);
    }
  }),
  getDataByzipcode: (getDataByZipcode = async (req, res) => {
    const { zipcode } = req.query;
    const zip = zipcode.toString();
    if (zip.length !== 0) {
      await datas
        .find({ "address.zipcode": { $all: [zip] } })
        .then((restaurant) => {
          res.json({
            restaurant,
          });
        });
    } else {
      res.json({
        messaga: "Zipcode not found !",
      });
    }
  }),
  getDataByCuisine: (getDataByCuisine = async (req, res) => {
    const { cuisine } = req.query;
    const cus = cuisine.toString();
    switch (cus) {
      case "American ":
        await datas.find({ cuisine: { $all: [cus] } }).then((restaurant) => {
          res.json({
            restaurant,
          });
        });
        break;
      case "Chicken":
        await datas.find({ cuisine: { $all: [cus] } }).then((restaurant) => {
          res.json({
            restaurant,
          });
        });
        break;
      default:
        res.json({
          messaga: "Cuisine not found !",
        });
        break;
    }
  }),
  getDataByorough: (getDataByorough = async (req, res) => {
    const { borough } = req.query;
    const bor = borough.toString();
    switch (bor) {
      case "Brooklyn":
        await datas.find({ borough: { $all: [bor] } }).then((restaurant) => {
          res.json({
            restaurant,
          });
        });
        break;
      case "Manhattan":
        await datas.find({ borough: { $all: [bor] } }).then((restaurant) => {
          res.json({
            restaurant,
          });
        });
        break;
      default:
        res.json({
          messaga: "Borough not found !",
        });
        break;
    }
  }),
  getDataStreet: (getDataStreet = async (req, res) => {
    const { street } = req.query;
    if (street.length !== 0) {
      const stre = street.toString();
      await datas
        .find({ "address.street": { $all: [stre] } })
        .then((restaurant) => {
          res.json({
            restaurant,
          });
        });
    } else {
      res.json({
        messaga: "Street not found !",
      });
    }
  }),
  getDataGrades: (getDataGrades = async (req, res) => {
    const { grades, score } = req.query;
    if (grades) {
      const gra = grades.toString();
      await datas
        .find({ "grades.grade": { $all: [gra] } })
        .then((restaurant) => {
          res.json({
            restaurant,
          });
        });
    } else if (score) {
      const sco = Number(score);
      await datas.find({ "grades.score": { $gt: sco } }).then((restaurant) => {
        res.json({
          restaurant,
        });
      });
    } else {
      await datas
        .find({ $expr: { $gte: [{ $size: "$grades" }, 3] } })
        .then((restaurant) => {
          res.json({
            restaurant,
          });
        });
    }
  }),
};

module.exports = dataController;
