const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const connectDB = async () => {
  const dbUrl = "mongodb://localhost:27017";
  try {
    await mongoose.connect(dbUrl);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = connectDB;
