# How to connect to Mongo database from node js

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'personal';
const client = new MongoClient(url);

async function getData(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('passwords');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();
