// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// Example 1:
// let = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4].

//let digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4];
let digits = [1, 9, 9];

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      console.log("digits", digits);
      return digits;
    }
  }
  digits.unshift(1);
  console.log("digits", digits);
  return digits;
};
console.log(plusOne(digits));
