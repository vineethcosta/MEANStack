const express = require('express');             //package import -- used to host Node.js projects
const bodyParser = require('body-parser');      //package import -- This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST 
                                                //node.js provides runtime environment for the project to run
const { mongoose } = require('./db.js');        //local import   -- noSQL database
const cors = require('cors');                   //allows access from different domain IP address
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyParser.json());                     //configuring middleware to pass JSON data to nodejs application using express
app.use(cors({ origin: 'http://localhost:4200'}));
app.listen(3000, () => console.log('Server started at Port : 3000 '));          //Start Express server to host application on port 3000


app.use('/employees',employeeController);