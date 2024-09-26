/* Reverse the  singly linked list by manipulating its head and return the reversed list.
 * - The input is head = [1,2,3,4,5]
 * - The expected output is [5,4,3,2,1].
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// node creator helper function
function node(val) {
  return new Node(val);
}

function insert(head, val) {
  // if linked list is empty create new node
  if (!head) return node(val);
  // if we have not reached end, keep traversing recursively with next of current head and the value
  head.next = insert(head.next, val);
  return head;
}
// iterative
// function reverseList(head) {
//   // base case if no head or one item
//   if (!head || !head.next) return head;

//   //   initiate previous variable to null and a current tracker to head
//   let prev = null,
//     curr = head;
//   while (curr) {
//     // while nodes exist, change the next pointer to reverse
//     // grab current nodes next value
//     let next = curr.next;
//     // assign current nodes next pointer to last visited node (for original head this will be null);
//     curr.next = prev;
//     // assign previous to current head for next iteration
//     prev = curr;
//     // assign current to the next value in list for next iteration
//     curr = next;
//   }
//   // return prevous (while will be last item in original list and the new head after reversal)
//   return prev;
// }

// recursive
function reverseList(head) {
  // base case if no head or 1 item in list
  if (!head || !head.next) return head;

  // reverse rest of list calling function recursively on each item in list
  const reverse_head = reverseList(head.next);

  // move head one past next item - the item that was after head in original array will now point to head with next
  head.next.next = head;

  // set current head's next to null to be replaced with previous item in reversal
  head.next = null;

  return reverse_head;
}

const head = node(1);
insert(head, 2);
insert(head, 3);
insert(head, 4);
insert(head, 5);
// console.log(head);
// console.log(head.next.next);
let reversed_list = reverseList(head);
console.log(reversed_list); // 5 -> 4 -> 3
console.log(reversed_list.next.next.next); // 2 -> 1
