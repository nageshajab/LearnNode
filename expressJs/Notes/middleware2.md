# Applying middleware to selective routes

const express = require('express');
const reqfilter = require('./middleware');
const app = express();

## step 1 : get instance of express.router

const route = express.Router();

## step 2 : set middleware on new instance of express.router

route.use(reqfilter);

## step 3 : define route using the new instance of express.router

route.get('/about',(req,res)=>{})

## step 4 : now add newly defined routes to application

app.use('/',route);

app.listen(5000);
