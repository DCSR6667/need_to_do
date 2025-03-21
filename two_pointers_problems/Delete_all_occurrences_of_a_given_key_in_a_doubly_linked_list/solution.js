// User function Template for javascript

/*
  class Node {
    constructor(val) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

integer key
head node head_ref
return head node

this problem can be solved by two pointers approach---O(n)
space complexity---O(1)

*/

class Solution {
  deleteAllOccurOfX(head_ref, key) {
    //Code for deleting all occurrences of key in the linked list goes here
    var curr = head_ref;
    var dummy = new Node(-1);
    dummy.next = curr;
    var temp = dummy;
    while (curr != null) {
      if (curr.data == key) {
        temp.next = curr.next;
        if (curr.next != null) {
          curr.next.prev = temp;
        }
        curr = curr.next;
      } else {
        temp = curr;
        curr = curr.next;
      }
    }
    return dummy.next;
  }
}
