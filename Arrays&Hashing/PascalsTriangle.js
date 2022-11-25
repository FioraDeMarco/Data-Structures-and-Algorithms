// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example 1:
let numRows = 5;
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// let numRows = 1
// Output: [[1]]
// Constraints: 1 <= numRows <= 30

var generate = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let pascalTriangle = [];
  for (let row = 1; row <= numRows; row++) {
    let rowArr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        rowArr.push(1);
      } else {
        rowArr.push(
          pascalTriangle[row - 2][col - 1] + pascalTriangle[row - 2][col]
        );
      }
    }
    pascalTriangle.push(rowArr);
  }
  return pascalTriangle;
};

console.log(generate(numRows));
