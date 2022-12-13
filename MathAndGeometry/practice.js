// [0,0,0,0,0,0,0]
// [0,0,1,0,0,1,0] student 3
// [0,0,1,1,0,1,0] student 4
// [0,0,1,1,1,1,0] student 5
// [0,0,1,1,1,0,0] student 6
// [0,0,1,1,1,0,1] student 7

const n = 276;
function numOfOpenLockers(n) {
  lockers = new Array(n).fill(0);
  console.log("what the fuck", lockers);
  let student = 2;
  let i = 2;
  while (student < n) {
    while (i < n) {
      if (i % student === 0) {
        lockers[i] = Math.abs(lockers[i] - 1);
        console.log("math", Math.abs(lockers[i]));
        i++;
      }
      i++;
      //student++;
    }
    student++;
  }
  let count = 0;
  for (let i = 0; i < lockers.length; i++) {
    console.log("lockers[i]", lockers[i]);
    if (lockers[i] === 1) count += 1;
  }
  console.log("count", count);
  return count;

  console.log("Math.floor(Math.sqrt(n))", Math.floor(Math.sqrt(n)));
  return Math.floor(Math.sqrt(n));
}
console.log(numOfOpenLockers(n));

/*

closed = 0
n -2 all lockers are closed
every idx that is %3 === if 0 set to 1, if 1 set to 0
every idx that is % 5 === if 0 set to 1, if 1 set to 0
return  




it would be whatever number is divisible by all of these numbers 
if it's 7 lockers/ students 
they will all be closed except for the number that is divisible by everything from 1 to that number



*/
