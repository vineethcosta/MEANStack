const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDb', (err) => {
    if(!err)
        console.log("MongoDB successfully connected YES");
    else
        console.log('Error while connecting to MongoDB:' + JSON.stringify(err,undefined,2));
});

module.exports=mongoose;
