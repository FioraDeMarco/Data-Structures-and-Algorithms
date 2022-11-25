let characters = ["a", "g", "o", "o", "d", "a", "y"];
let document = ["d", "a", "y"];

function generateDocument(characters, document) {
  let chars = {};
  for (const char of characters) {
    if (!(char in chars)) {
      chars[char] = 0;
      chars[char]++;
    }
    if (char in chars) chars[char]++;
  }
  for (const char of document) {
    if (!(char in chars) || chars[char] === 1) {
      return false;
    } else {
      chars[char]--;
    }
  }
  console.log("chars", chars, characters, document);
  return true;
}
console.log(generateDocument(characters, document));
