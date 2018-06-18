//implement router from express
const express = require('express');
let router = express.Router() //👈🏼 Router from express

let { Employee } = require('../models/employee')
// adding a router that will retrieve all employees from the db
//👇🏼 http://localhost:3000/employees/list
router.get('/list', (req, res)=> {
  Employee.find((err, docs)=>{
    if(!err){ res.send(docs)} 
    else console.log("Error in retrieving Employee Data: " + JSON.stringify(err, undefined, 2));
  });
})

// add our POST request to add data to our database
router.post('/list', (req, res)=> {
  //we need to create an Employee model class and save it in a var called `emp` 
  //this gives us a new json data of the new employee using `req.body` object
  let emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });
  //then save it to db
  emp.save();
})

//we need to export this module
module.exports = router;


