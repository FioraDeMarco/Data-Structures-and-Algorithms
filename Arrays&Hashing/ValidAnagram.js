// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
let s = "anagram",
  t = "nagaram";
// Output: true

// Example 2:
// let s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

var isAnagram = function (s, t) {
  s = s.split("").sort();
  t = t.split("").sort();
  let idx1 = 0;
  if (s.length !== t.length) return false;
  while (idx1 < s.length) {
    if (s[idx1] !== t[idx1]) {
      return false;
    } else {
      idx1++;
    }
  }
  return true;
};
console.log(isAnagram(s, t));
