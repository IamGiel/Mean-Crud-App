const mongoose = require('mongoose');
//connect to mongoose 
mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
  if(!err){
    console.log("CrudDb is connected! 📡 ");
  }
  else {
    console.log("Error in db connection: " + JSON.stringify(err, undefined, 2));
  }
});

module.exports = mongoose;

//run node db.js in CLI and if everything goes well the earth sign appears!