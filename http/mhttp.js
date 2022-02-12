const http = require('http');

//Create server with arrow function
// http.createServer((req,res)=>{
//     res.write("<h1> I am here </h1>");
//     res.end();
// }).listen(4500);
// console.log('server running at 4500');

//create server with a separate function 
function dataControl(req, res) {
    res.write("<h1> I am here </h1>");
    res.end();
}
http.createServer(dataControl).listen(4500);