/* Merge 2 sorted linked lists
 *
 * The input will be:
 *   - linked_list1 = [1,2,4]
 *   - linked_list2 = [1,3,4]
 *
 *   - expected output: [1,1,2,3,4,4].
 */

/* 
    Steps:
    1. check if first head is null and return second head if so
    2. check if second head is null and return first head if so
    3. check if the value of the first head is less than value of second:
        - recursively call merge function on first_head.next and the second head
        - return first head to function call stack
    4. If value of first head is equal to or greater than second head
        - recursively call merge function on second_head.next and the second head
        - return second head to function call stack
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeLists(list1, list2) {
  // base case if one list is empty
  if (!list1) return list2;
  if (!list2) return list1;

  // if value of first head is less than value of second head
  if (list1.val < list2.val) {
    // call mergeLists on list1.next and list2 to compare, returning list1 to function stack
    list1.next = mergeLists(list1.next, list2);
    return list1;
  } else {
    // if list1 value is greater or equal, call mergeLists on list2.next and list1, return list2
    list2.next = mergeLists(list2.next, list1);
    return list2;
  }
}
// helper function to create node
function node(val, next = null) {
  return new ListNode(val, next);
}

const l1_node3 = node(4);
const l1_node2 = node(2, l1_node3);
const l1 = node(1, l1_node2);
// console.log("l1", l1);

const l2_node3 = node(4);
const l2_node2 = node(3, l2_node3);
const l2 = node(1, l2_node2);
// console.log("l2", l2);

let merged_lists = mergeLists(l1, l2);

// print result
function printResults(list) {
  let res = [];
  while (list) {
    res.push(list.val);
    list = list.next;
  }
  console.log(res);
}

printResults(merged_lists);
