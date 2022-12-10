// Given an unsorted array of integers nums, return the length
//of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.
// Example 1:
let nums = [100, 4, 200, 1, 3, 2];
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// let nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let length = 0;
  let longest = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      length = 0;
      while (set.has(num + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }
  return longest;
};
// using a variable name like result is a bad sign to someone who is skilled at ds&a
console.log(longestConsecutive(nums));
