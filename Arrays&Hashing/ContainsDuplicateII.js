// Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j
// in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Constraints: 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

// let nums = [1, 2, 3, 1, 2, 3],
//   k = 2;

// let nums = [1, 2, 3, 1],
//   k = 3;

nums = [1, 0, 1, 1];
k = 1;

var containsNearbyDuplicate = function (nums, k) {
  let numMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in numMap)) {
      numMap[nums[i]] = i;
    } else if (Math.abs(numMap[nums[i]] - i) <= k) {
      console.log("numMap[nums[i]] - i < k", Math.abs(numMap[nums[i]] - i));
      return true;
    } else if (!Math.abs(numMap[nums[i]] - i) <= k) {
      numMap[nums[i]] = i;
    }
  }
  console.log("numMap", numMap);
  return false;
};

console.log(containsNearbyDuplicate(nums, k));
