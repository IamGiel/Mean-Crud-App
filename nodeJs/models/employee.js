const mongoose = require('mongoose');
// create the model Schema for `Employee`
let Employee = mongoose.model("Employee", {
  name: { type: String },
  position: { type: String },
  office: { type: String },
  salary: { type: Number }
});

module.exports = Employee;