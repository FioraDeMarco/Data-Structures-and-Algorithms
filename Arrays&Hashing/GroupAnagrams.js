// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// let strs = [""]
// Output: [[""]]

// Example 3:
// let strs = ["a"]
// Output: [["a"]]

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let key = word.split("").sort().join("");
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(word);
  }
  return Object.values(map);
};

console.log(groupAnagrams(strs));
