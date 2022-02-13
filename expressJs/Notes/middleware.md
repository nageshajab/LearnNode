# Setup express

const express = require('express');
const path = require('path');
const reqfilter = require('./middleware');

const app = express();
app.set('view engine', 'ejs');

## defining middlewares reqfilter

const reqfilter = (req, res, next) => {
    if (!req.query.token) {
        res.send('token missing');
    }
    else {
        next();
    }
}

## like this you can apply middleware to all routes

app.use(reqfilter);

## configure static folder

const wwwPath = path.join(__dirname, 'www');
app.use(express.static(wwwPath));

## pass middleware as second input to app.get when you want to apply middleware to only one route

## eg. app.get('', reqfilter,(req, res) => {})

app.listen(5000);
