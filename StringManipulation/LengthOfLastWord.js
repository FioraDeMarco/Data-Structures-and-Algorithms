// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:
//let s = "Hello World";
// Output: 5   Explanation: The last word is "World" with length 5.

// Example 2:
//let s = "   fly me   to   the moon  ";
// Output: 4 Explanation: The last word is "moon" with length 4.

// Example 3:
let s = "luffy is still joyboy";
// Output: 6 Explanation: The last word is "joyboy" with length 6.

// Constraints: 1 <= s.length <= 104 // s consists of only English letters and spaces ' '.
// There will be at least one word in s.

var lengthOfLastWord = function (s) {
  let letterCount = 0;
  let trimS = s.trim();
  for (let i = 0; i < trimS.length; i++) {
    if (trimS[i] === " ") {
      letterCount = 0;
    } else {
      letterCount++;
    }
  }
  return letterCount;
};
console.log(lengthOfLastWord(s));
