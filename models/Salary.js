const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema=mongoose.Schema;
const salarySchema = new mongoose.Schema({
  enabled: {
    type: Boolean,
    default: true,
  },
  laborerName: {
    type: String,
    trim: true,
    required: true,
  },
  projectName: {
    type:String,
    required:true,
  },
 totalSqft: {
    type: Number,
    default:0
  },
  weeklyPay: {
    type: Number,
    default:1,
  },
  salary: {
    type: Number,
    default:1
  },
 
});
const Salary = mongoose.model("Salary", salarySchema);
module.exports = Salary
