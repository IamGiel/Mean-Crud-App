//package import
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//local import
const { mongoose } = require('./db'); // this import establishes connection to mongodb using es6 destructuring method
// request for the controller statement 
let employeeController = require('./controller/employeeController');

//define the port
const PORT = process.env.PORT || 3000;
//to work with express function, we call express using
//👇
const app = express();
app.use(bodyParser.json())
app.use(cors({origin: "http://localhost:4200/"})); //use cors, pass an object with property origin: the url of the site needing cors

//to add the router from controller to this application
//we add this middleware 👇🏼
app.use("/employees", employeeController); 

//to start the express server
//👇
app.listen(PORT, ()=> {
  console.log("🌎 is listening on ", PORT)
})

