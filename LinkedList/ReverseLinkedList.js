// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
let head = [1, 2, 3, 4, 5];
// Output: [5,4,3,2,1]

// Example 2:
// let head = [1,2]
// Output: [2,1]

// Example 3:
// let head = []
// Output: []
// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000
// * @param {ListNode} head
// * @return {ListNode}
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
var reverseList = function (head) {
  let current = head;
  let previous = null;
  while (current) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  console.log("answer", previous);
  return previous;
};

console.log(reverseList(head));
