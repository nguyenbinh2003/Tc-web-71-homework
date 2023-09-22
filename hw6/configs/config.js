const { default: mongoose } = require("mongoose");

const configDb = async () => {
  const envUrl = process.env.URL_DATA;
  try {
    await mongoose.connect(envUrl);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = configDb;
