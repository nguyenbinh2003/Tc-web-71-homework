const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

const datas = new Schema({
  address: {
    building: String,
    coord: Array,
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Array,
      grade: String,
      score: Number,
    },
  ],
  name: String,
  restaurant_id: String,
});

const MyDatas = mongoose.model("restaurant", datas);

module.exports =  MyDatas;
