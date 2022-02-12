//-----------------Problem Statement-------------------
//developer expecting total to be 30 instead he is getting 10, because sequence of execution is 1->3->2  
//code block 1
// let a = 10;
// let b = 0;

// //code block 2
// setTimeout(() => {
//     b = 20;
// }, 2000);

// //code block 3
// console.log(a + b);
//---------------------------------------------
//after promise code execution happens like 1->2->3
//code block 1
let a = 10;
let b = 0;

//code block 2
let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
});

//code block 3
waitingData.then((data) => {
    console.log(a + data);
});
