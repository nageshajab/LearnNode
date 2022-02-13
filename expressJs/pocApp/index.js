const express = require('express');
const app = express();
require('./router')(app);

app.set('view engine', 'ejs');

app.listen(5000);
console.log('Server running at http://127.0.0.1:5000/');