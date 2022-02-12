const fs = require('fs');

fs.writeFileSync("log.txt", "written file successfully"); //write and create file

//get current directory name
console.log(__dirname);
console.log(__filename); // get current file name 

//to delete file 
fs.unlinkSync("log.txt");

//to join paths
const path = require('path');
const dirpath = path.join(__dirname, 'dirname');
console.log(dirpath);

//reading & listing of files in a folder
fs.readdir(dirpath, (err, files) => {
    files.forEach((item)=>{
        console.log(item);
    });
});