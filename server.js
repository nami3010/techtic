const express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
var app = express()
const cors = require('cors');
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

console.log(process.env.DB_URL)
mongoose.connect('mongodb://localhost:27017/techtic', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes')(app);
app.listen(3000, function () {
    console.log('listening on 3000')
})

