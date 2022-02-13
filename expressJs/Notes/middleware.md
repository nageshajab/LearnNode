# Applying middleware to single or all routes

const express = require('express');
const path = require('path');

const app = express();

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

## pass middleware as second input to app.get when you want to apply middleware to only one route

## eg. app.get('', reqfilter,(req, res) => {})

app.listen(5000);
