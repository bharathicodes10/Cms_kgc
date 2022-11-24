const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;
const projectSchema = new mongoose.Schema({
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
 address: {
    type: String,
    trim: true,
  },
  totalSqft:{
    type: Number,
  },
  clientName:{
    type:String,
    trim:true,
  },
 leadName:{
    type:String,
    trim:true,
  },
 budget: {
    type: Number,
  },
 startedOn:{
    type:Date,
  },
  completedOn:{
    type:String,
  },
});

module.exports = mongoose.model("Projects", projectSchema);
