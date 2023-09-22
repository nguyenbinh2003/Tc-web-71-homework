const database = require("../models/dataCMS.model");

const adminController = {
  createStudent: async (req, res) => {
    if (req.body) {
      const createStudent = new database(req.body);
      await createStudent.save();
      res.json({
        message: "Successfully created",
      });
    } else {
      res.status(400).json({
        message: "New creation failed",
      });
    }
  },
  getAllStudent: async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
      const count = await database.countDocuments({});
      const totalPages = Math.ceil(count / limit);

      await database
        .find({})
        .skip(skip)
        .limit(limit)
        .then((data) => {
          res.json({
            data: data,
            totalDatas: count,
            limit,
            currentPage: page,
            totalPages,
          });
        });
    } catch (err) {
      throw new Error(err);
    }
  },
  updateStudent: async (req, res) => {
    const { id } = req.params || {};
    const body = req.body || {};
    if (id.length !== 0 && body.length !== 0) {
      await database.findByIdAndUpdate({ _id: id }, body, {
        new: true,
        upsert: true,
      });
      res.json({
        message: "Successfully updated",
      });
    } else {
      res.status(400).json({
        message: "Update failed",
      });
    }
  },
  deleteStudent: async (req, res) => {
    const { id } = req.params || {};
    if (id.length !== 0) {
      await database.deleteOne({ _id: id });
      res.json({ message: "Successfully deleted" });
    } else {
      res.status(400).json({
        message: "Deletion failed",
      });
    }
  },
};

module.exports = adminController;
