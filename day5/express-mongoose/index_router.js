var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var router = require('./api');

var port = 3000;
var mongoUrl = 'mongodb://127.0.0.1:27017/tavant_db';

// STEP 0:
// Setup bodyparser middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// STEP 1:
// CREATE MONGO CONNECTION AND START SERVER

mongoose.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
    app.listen(port, () => {
        console.log("Server started on: ", port);
    });
});


// STEP 2:
// Create landing page
app.get('/', (req, res) => {
    res.send("API CRUD Server is Up !!! ");
});

// STEP 3:
// Register router
app.use('/api',router);