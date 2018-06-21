
//implement router from express
const express = require('express');
let router = express.Router() //👈🏼 Router from express
let ObjectId = require('mongoose').Types.ObjectId; //mongoose objectId, helps us check if an _id is valid

let { Employee } = require('../models/employee')
// adding a router that will retrieve all employees from the db
//👇🏼 http://localhost:3000/employees/list
router.get('/list', (req, res)=> {
  Employee.find((err, docs)=>{
    if(!err){ res.send(docs)} 
    else console.log("Error in retrieving Employee Data: " + JSON.stringify(err, undefined, 2));
  });
})

// get request to specific user id
router.get("/list/:id", (req, res) => {
  //check if the id is valid
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No Record with given id : '`${req.params.id}`);
  Employee.findById(req.params.id, (err, docs)=> {
    if(!err) {res.send(docs)}
    else console.log("Error in retrieving Employee Data: " + JSON.stringify(err, undefined, 2));
  })
});

// 👇🏼this route (router.post) will be consumed by Angular so that user can submit a form to the db

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
  emp.save((err, docs)=> {
    if(!err){res.send(docs)}
    else console.log("Error in retrieving Employee Data: " + JSON.stringify(err, undefined, 2));
  });
  //we will use `postman` to insert and test data
})

// update method
router.put('/list/:id', (req, res) => {
    //check if the id is valid
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No Record with given id : '`${req.params.id}`);
  let emp = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  };
  Employee.findOneAndUpdate(req.params.id, {$set: emp}, {new : true}, (err, docs)=>{
    if(!err){ res.send(doc) }
    else console.log("Error in retrieving Employee Data: " + JSON.stringify(err, undefined, 2));
  })
})
// delete method
router.delete('/list/:id', (req, res) => {
    //check if the id is valid
  if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No Record with given id : '`${req.params.id}`);

  Employee.findByIdAndRemove(req.params.id, (err, docs)=>{
    if(!err){ res.send(doc) }
    else console.log("Error in retrieving Employee Data: " + JSON.stringify(err, undefined, 2));
  })
})



//we need to export this module
module.exports = router;


