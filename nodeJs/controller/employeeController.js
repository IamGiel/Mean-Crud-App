//implement router from express
const express = require('express');
let router = express.Router() //👈🏼 Router from express

let { Employee } = require('../models/employee')
// adding a router that will retrieve all employees from the db
router.get('/', (req, res)=> {
  Employee.find((err, docs)=>{
    if(!err){ res.send(docs)} 
    else console.log("Error in retrieving Employee Data: " + JSON.stringify(err, undefined, 2));
  });
})

//we need to export this module
module.exports = router;


