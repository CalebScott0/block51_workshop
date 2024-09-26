// input linked list is [1, 2, 3, 4], the output should be [2, 1, 4, 3].
// swap nodes in pairs

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

function swapNodes(head) {
  if (!head || !head.next) return head;

  //   newHead to return
  let new_head = head.next;

  let prev = null;
  let curr = head;
  while (curr && curr.next) {
    // temp will point to 2 items ahead in list
    let temp = curr.next.next;
    // move curr one past the item currently next to it in the list
    curr.next.next = curr;
    // on first pass
    if (!prev) {
      prev = curr;
    } else {
      // assigning prev.next to curr.next moves the pointer of the node behind curr in list to the node after curr in list
      prev.next = curr.next;
      //   assign prev to curr for next pass
      prev = curr;
    }
    // place item 2 ahead of node originally back into list at the next spot after current node
    curr.next = temp;
    // move to next item in list -> while loop will terminate at the end
    curr = curr.next;
  }

  return new_head;
}
