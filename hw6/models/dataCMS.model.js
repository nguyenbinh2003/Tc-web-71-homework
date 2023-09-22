const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const dataCMS = new Schema({
  role:String,
  userName: String,
  password: String,
  report: Array,
});

const database = mongoose.model("dataCMS", dataCMS);
// const name = async () => {
//   await database.deleteMany();
// };
// name();

module.exports = database;
