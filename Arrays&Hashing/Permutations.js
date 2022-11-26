// Write a function that takes in an array of unique integers and returns an array of all permutations of
// those integers in no particular ondragover.
// If the input array is empty, the function should return an empty array.If

let array = [1, 2, 3];
// Output = [
//     [ 1, 2, 3 ],
//     [ 1, 3, 2 ],
//     [ 2, 1, 3 ],
//     [ 2, 3, 1 ],
//     [ 3, 1, 2 ],
//     [ 3, 2, 1 ]
//   ]

function getPermutations(array) {
  let permArr = [];
  permutationsHelper(array, [], permArr);
  return permArr;
}
function permutationsHelper(array, currentPerm, permArr) {
  if (!array.length && currentPerm.length) {
    permArr.push(currentPerm);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArr = array.slice(0, i).concat(array.slice(i + 1));
      const newPerm = currentPerm.concat([array[i]]);
      permutationsHelper(newArr, newPerm, permArr);
    }
  }
}

console.log(getPermutations(array));
