const fs=require('fs');

fs.writeFileSync("log.txt","written file successfully"); //write and create file

//get current directory name
console.log(__dirname);
console.log(__filename); // get current file name 


