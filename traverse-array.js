// 2D array traversal
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]; //array of arrays

// console.log(array2D[2][1]);

array2D[0][1]=60;
array2D[1].push(70);
array2D[1].pop(70);
// console.log(array2D[0][1]);
console.log(array2D);

// // Traverse the 2D array
// for (let i = 0; i < array2D.length; i++) {
//   for (let j = 0; j < array2D[i].length; j++) {
//     console.log(array2D[i][j]);
//   }
// }