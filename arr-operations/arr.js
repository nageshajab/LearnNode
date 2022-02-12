const arr=[2,3,4,6,4,7,3];

//iterate over each arr item and print all elements
// arr.filter((item)=>{
//     console.log(item);
// });

//iterate over each arr element and print only element with matching criteria
let result = arr.filter((item)=>{
   return item === 3; //return items if its value is 3, it will also work like item > 4 
});
console.warn(result);
