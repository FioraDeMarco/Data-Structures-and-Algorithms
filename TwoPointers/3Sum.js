// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:
let nums = [-1, 0, 1, 2, -1, -4];
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2]. Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// let nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// let nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:
// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

var threeSum = function (nums) {
  let sum = 0;
  let hash = {};
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let val = nums[i] + nums[left] + nums[right];
      if (val > sum) {
        right--;
      } else if (val < sum) {
        left++;
      } else {
        let arr = [nums[i], nums[left], nums[right]];
        hash[arr] = arr;
        left++;
        right--;
      }
    }
  }
  return Object.values(hash);
};
console.log(threeSum(nums));

// Brute force solution
//    var threeSum = function(nums) {
//   let triplets = {}
//   for (let i = 0; i < nums.length-2; i++) {
//     for(let j = 1; j < nums.length-1; j++) {
//       for (let k = 2; k < nums.length; k++) {
//           console.log('hello')
//          if (nums[i] + nums[j] + nums[k] === 0 && i !== j &&  j !== k && i !== k) {
//              console.log('world')
//              let arr = [nums[i], nums[j], nums[k]]
//              triplets[arr] = arr

//          }
//       }
//     }
//   }
//     console.log('triplets', triplets)
//     return Object.values(triplets)
//}
