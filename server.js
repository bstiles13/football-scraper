const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');

const target = "football_db";
const db = process.env.MONGODB_URI || "mongodb://localhost/" + target;

mongoose.connect(db, err => {
    if (err) {
        throw err;
    } else {
        console.log('Successful MongoDB connection to ' + target);
    }
})

const PORT = 3001;
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/build"));
app.use('/', routes);

app.listen(PORT, () => {
    console.log('Server listening on port: ' + PORT);
})