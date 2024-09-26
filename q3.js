// delete all given values from a list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function node(val) {
  return new Node(val);
}
function insert(head, val) {
  // base case if no head
  if (!head) return node(val);
  // traverse through list until end
  head.next = insert(head.next, val);
  return head;
}

function removeValues(head, target) {
  if (!head) return head;
  // if current node is equal to target value to remove ->
  // return result of recursive function call with head.next and target, replacing node with target in list
  if (head.val === target) {
    return removeValues(head.next, target);
  } else {
    // else, keep head in list and move to next
    head.next = removeValues(head.next, target);
  }
  return head;
}

function print(head) {
  if (!head) return null;
  console.log(head.val);
  print(head.next);
}
const head = insert(null, 1);
console.log(head);
const fill_array = [2, 6, 3, 4, 5, 6];
fill_array.forEach((x) => insert(head, x));
const result = removeValues(head, 6);
print(result);
