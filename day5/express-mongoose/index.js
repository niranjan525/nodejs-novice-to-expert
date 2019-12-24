var express = require('express');
var app = express();
var user = require('./models/usermodel');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

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
// Create all CRUD routes in ExpressJS
//
// Step 3a:
// Create of CRUD
app.post('/user', (req, res) => {
    user.create(req.body, (err, result) => {
        if (err) res.send(500, err);
        res.send('data inserted: ' + JSON.stringify(result));
    });
});

// Step 3b:
// Read of CRUD
app.get('/user/:name', (req, res) => {
    user.findOne({ name: req.params.name }, (err, result) => {
        if (err) res.send(500, err);
        res.send('data found: ' + JSON.stringify(result));
    })
});


app.get('/user', (req, res) => {
    user.find({}, (err, result) => {
        if (err) res.send(500, err);
        res.send('data found: ' + JSON.stringify(result));
    })
});
// Step 3c:
// Update of CRUD
app.put('/user', (req, res) => {
    let updateObj = {
        name: req.body.name,
        city: req.body.city,
        job: req.body.job
    };

    user.findOneAndUpdate({ name: req.body.name },
        { $set: updateObj },
        { upsert: true },
        (err, result) => {
            if (err) res.send(500, err);
            res.send('data updated: ' + JSON.stringify(result));
        });
});

// Step 3d:
// Delete of CRUD
app.delete('/user', (req, res) => {
    user.findOneAndDelete({ name: req.body.name },
        (err, result) => {
            if (err) res.send(500, err);
            res.send('data deleted: ' + JSON.stringify(result));
        });
});
