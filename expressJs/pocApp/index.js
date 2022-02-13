const express = require('express');
const app = express();
require('./router')(app);

app.set('view engine', 'ejs');

app.listen(5000);