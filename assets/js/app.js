// Find Max Number From Given Array:

// // To find Maximum value form an array

// 1) let arr = [200,400,100,500,]

// let maxNum = 0; // there is no negative number in given array.

// arr.forEach(num=>{
//     if(maxNum<num)
//     {
//         maxNum=num
//     }

// })
// console.log(maxNum);

// ****************************************************************

// 2) with Function

// let numbers = [12,11,34,56,84];

// const findMax = (arr)=>{ // array me se find karna hai max number isliye arr callback function arr
//     let max = 0;

// arr.forEach(add=>{
//     if(add>max)
//     {
//         max = add
//     }
// })
//     return max;
// }
// console.log(findMax(numbers));
// console.log(...numbers); // here spread operator will unpacked to an array as 12 11 34 56 84

// *******************************************************************************************

//3)

// let demo = [12,11,34,56,84];
// const print = (num)=>Math.max(...num)
// console.log(print(demo));

// *******************************************************************************************

// 4) let numbers = [12,11,34,56,84];
// console.log(Math.max(12,11,34,56,84));
// console.log(Math.max(...numbers));

// *******************************************************************************************

// 5)
//     let arr = [
//     [22,33,45,66],
//     [25,32,43,56],
//     [34,54,21,68],
//     [222,323,452,99],

// ]
// let flat = arr.flat(1); //
// console.log(...flat);

// console.log(Math.max(...flat));

// *******************************************************************************************

// 6)

// let flat = [
//   [22, [33, 45, [66]]],
//   [25, 32, 43, 56],
//   [34, 54, 21, 68],
//   [222, 323, 452, 99],
// ];

// const findMax = (arr) => {
//   let f01 = arr.flat(Infinity);
//   // console.log(f01);
//   return Math.max(...f01)
  

// };
// console.log(findMax(flat)); // 452

// ---------------------------------------------------


// const findMax = (arr) => {
//   let f01 = arr.flat(Infinity);
//   // console.log(f01);
//   let max =  Math.max(...f01)
//   return max

// };
// console.log(findMax(flat)); // 452

// ---------------------------------------------------

// const findMax = (arr) => {
//    return Math.max(...arr.flat(Infinity));
 

// };
// console.log(findMax(flat)); // 452

// ----------------------------------------------------------------

// const findMax = (arr) => Math.max(...arr.flat(Infinity));
// console.log(findMax(flat)); // 452






// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// To find Minimum value form an array

// 1) let arr = [200,400,100,500,]

// let maxNum =Infinity;   //here you can add max value of array as 500

// arr.forEach(num=>{
//     if(maxNum>num)
//     {
//          maxNum=num
//     }

// })
// console.log(maxNum);

// -----------------------------------------------------------------------

// 2) let arr = [200,400,100,500,700]
// console.log(Math.min(200,400,100,500,700));
// console.log(Math.min(...arr));

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// let fArray = [[12, 23, 34], [12, 34, 56], [357, 5, 6, 8]];

// let data = fArray[0];
// storeArray.push(Math.max(...data));

// let data01 = fArray[1];
// storeArray.push(Math.max(...data01));

// let data02 = fArray[2];
// storeArray.push(Math.max(...data02));

// console.log( storeArray);



//  let oddArray = [1,3,5,7,11,13,15,19];






