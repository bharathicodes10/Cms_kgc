const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;
const budgetSchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  projectName: {
    type: String,
    trim: true,
    required: true,
    sortable:true,
  },
  totalsqft:{
    type:String,
    required:true,
  },
  price: {
    type: String,
    default:3700000,
  },
 steelPrice:{
    type:String,
    default:75,
 },
 mSand:{
    type:String,
    default:40,
 },
 cSand:{
    type:String,
    default:20,
 },
 bricks: {
    type: String,
    default: 50000,
  },
  concretem3: {
    type: String,
    default: 50,
  },
  frames: {
    type: String,
    default: 185000,
  },
  doorsAndWindows: {
    type: String,
    default:2250,
  },
  plumbing: {
    type: String,
    default: 110000,
  },
  electrical: {
    type: String,
    default: 74000,
  },
 painting: {
    type: String,
    default: 185000,
  },
});

module.exports = mongoose.model("Budget", budgetSchema);
