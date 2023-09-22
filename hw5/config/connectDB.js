const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  const envUrl = process.env.URL;
  try {
    await mongoose.connect(envUrl);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = connectDB;
