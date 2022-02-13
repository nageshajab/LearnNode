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
        username: 'nageshajaba@gmail.com',
        password: 'nagesh gmail 4'
    });
    const result = await data.save();
    console.log(result);
}

getData();