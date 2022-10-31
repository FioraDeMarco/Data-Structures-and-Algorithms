// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
let nums = [1, 2, 3, 4];
// Output: [24,12,8,6]

// Example 2:
// let nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:
// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

//[200, 100, 50]
var productExceptSelf = function (nums) {
  let product = 1;
  let productArray = [];
  let badNum = 0;
  let mult = 0;

  while (badNum < nums.length) {
    while (mult < nums.length && badNum < nums.length) {
      if (mult !== badNum) {
        product *= nums[mult];
        mult++;
      } else {
        mult++;
      }
    }
    productArray.push(product);
    mult = 0;
    product = 1;
    badNum++;
  }
  return productArray;
};
console.log(productExceptSelf(nums));
