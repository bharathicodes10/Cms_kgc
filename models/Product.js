const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;
const productSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  productName: {
    type: String,
    trim: true,
    required: true,
    sortable:true,
  },
  Laborer:{
    type: Schema.Types.ObjectId,ref:'Salary'
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  status: {
    type: String,
    default: "ongoing",
  },
});

module.exports = mongoose.model("Product", productSchema);
