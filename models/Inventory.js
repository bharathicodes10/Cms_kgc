const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;
const inventorySchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  articleName: {
    type: String,
    trim: true,
    required: true,
  },
  vendorName: {
    type: String,
    trim: true,
    required: true,
  },
  Laborer:{
    type: Schema.Types.ObjectId,ref:'Salary'
  },
  purchaseuom: {
    type: String,
    trim: true,
  },
  stockuom: {
    type: String,
    trim: true,
  },
  dept: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
  },
  status: {
    type: String,
    default: "available",
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
