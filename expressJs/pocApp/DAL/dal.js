const mongoose = require('mongoose');

let url = '';
let database = ''
const passwordSchema = new mongoose.Schema({
    username: String, password: String
});

class dal {
    constructor() {
        mongoose.connect(`${url + '/' + database}`);
    }

    getdata(){

    }
}

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
