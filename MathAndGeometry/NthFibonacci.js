// Write a function that takes in an integer "n" and returns the nth Fibonacci Number.

let n = 2;
// sample output 1
//let n = 6
// sample output 5

function getNthFib(n) {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
}

console.log(getNthFib(n));
