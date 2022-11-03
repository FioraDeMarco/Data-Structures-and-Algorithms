// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
let s = "A man, a plan, a canal: Panama";
// Output: true Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// let s = "race a car"
// Output: false  Explanation: "raceacar" is not a palindrome.

// Example 3:
// let s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

var isPalindrome = function (s) {
  let string = s.toLowerCase();
  let left = 0;
  let right = string.length - 1;
  let alpha = "abcdefghijklmnopqrstuvwxyz0123456789";
  let alphaNum = [];
  while (left < right) {
    if (
      alpha.includes(string[left]) &&
      alpha.includes(string[right]) &&
      string[left] === string[right]
    ) {
      left++;
      right--;
    } else if (!alpha.includes(string[right])) {
      right--;
    } else if (!alpha.includes(string[left])) {
      left++;
    } else if (
      alpha.includes(string[left]) &&
      alpha.includes(string[right]) &&
      string[left] !== string[right]
    ) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(s));
