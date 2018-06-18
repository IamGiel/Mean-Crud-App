const mongoose = require('mongoose');
// create the model Schema for `Employee`
let Employee = mongoose.model("Employee", {
  name: { type: String },
  position: { type: String },
  office: { type: String },
  salary: { type: Number }
});

module.exports = {Employee};  //es6 syntax
//this was equivalent to 👇🏼

// module.exports = { 
//   Employee: Employee
// };
