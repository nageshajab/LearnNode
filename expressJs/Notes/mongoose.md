# Using Mongoose with node js

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017';
const database = 'personal';
const passwordSchema = new mongoose.Schema({
    username: String, password: String
});

mongoose.connect(`${url + '/' + database}`);

async function getData() {
    const Password = mongoose.model('passwords', passwordSchema);
    let data = new Password({
        username: 'test@gmail.com',
        password: 'testp'
    });
    const result = await data.save();
    console.log(result);
}

getData();
