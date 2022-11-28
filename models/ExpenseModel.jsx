const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const expenseSchema = new Schema({
  deductionType: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  processBy: {
    type: String,
    required: true,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
