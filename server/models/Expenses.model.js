const mongoose = require("mongoose");



const ExpensesSchema = new mongoose.Schema({
  projectname: { type: String, requried: true },
  expensee: { type: String, requried: true },
  notes: { type: String, requried: true },
  file: { type: String, requried: true },
  amount: { type: Number, requried: true },
  date: { type: String, requried: true },
});




const ExpensesModel = mongoose.model("Expenses", ExpensesSchema);

module.exports = ExpensesModel;
