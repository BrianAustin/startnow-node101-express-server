// import files and packages up here
const express = require('express');
// create your express server below
const app = express();
// add your routes and middleware below
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var obj = require('./data'); 
var morgan = require('morgan');
app.use(morgan('dev'));
//routes
app.get('/', function(req, res){
    res.status(200).send('');
});

app.get('/data', function(req, res){
    res.json(obj);
});    
// finally export the express application
module.exports = app;