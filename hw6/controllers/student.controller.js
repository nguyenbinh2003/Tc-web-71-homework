const database = require("../models/dataCMS.model");

const studentController = {
  getAllReport: async (req, res) => {
    const id = req.user.id;
    const user = await database.findById({ _id: id });
    if (!user) {
      return res.status(500).json({
        message: "Something is wrong",
      });
    }
    res.json(user.report);
  },
  updateReport: async (req, res) => {
    const id = req.user._id;
    const body = req.body || {};
    const user = await database.findByIdAndUpdate({ _id: id }, body, {
      new: true,
      upsert: true,
    });
    if (!user) {
      return res.status(500).json({
        message: "Something is wrong",
      });
    }
    res.json({ message: "Successfully updated" });
  },
};

module.exports = studentController;
