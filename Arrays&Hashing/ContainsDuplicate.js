// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
let nums = [1, 2, 3, 1];
// Output: true

// Example 2:
//let nums = [1,2,3,4]
// Output: false

// Example 3:
//let nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// ********* First Solution *********
var containsDuplicate = function (nums) {
  let unique = [...new Set(nums)];
  if (unique.length < nums.length) {
    return true;
  }
  return false;
};

console.log(containsDuplicate(nums));

/*
two pointers
set to first idx check if any following are the same return true
if not, move both pointers over one and iterate again while loop
return false

make a hash map of the array

make a set
*/
