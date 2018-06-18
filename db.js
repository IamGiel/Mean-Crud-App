const mongoose = require('mongoose');
//connect to mongoose 
mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
  if(!err){
    console.log(" 🌎 is now connected to our database ");
  else if (err){
    console.log("Error in db connection: " + JSON.stringify(err, undefined, 2));
  }
  }
});