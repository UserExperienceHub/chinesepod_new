// CALL ENV FILE
require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");

const indexRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + "/views"));
app.use(cors());

// Set the app view engine
app.set("view engine", "ejs");

// APP  CONTAINER =========== >> 
let conn = require('./config/DbConnect'); 
conn.connectToServer(function(err, client) {  
  console.log('mongodb connected')
})

app.use('/', indexRoutes);

app.listen(80, function(){
  console.log('Server listening on port 80')
});