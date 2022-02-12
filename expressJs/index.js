const express = require('express');
const path = require('path');

const app = express();

//configure static folder 
const wwwPath= path.join(__dirname,'www');
app.use(express.static(wwwPath));

app.get('',(req,res)=>{
    res.sendFile(`${wwwPath}/index.html`);
});

app.get('/about',(req,res)=>{
    //res.send('this is about page');sending raw test message
    res.sendFile(`${wwwPath}/about.html`);
});

//put this condition at bottom, when no path matches, it will return 404.html
app.get('*',(req,res)=>{
    //res.send('this is about page');sending raw test message
    res.sendFile(`${wwwPath}/404.html`);
});

app.listen(5000);