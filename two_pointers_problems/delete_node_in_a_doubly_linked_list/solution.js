// this problem can be solved by two pointers--O(n)
//
// User function Template for javascript

/*class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * @param {Node} head
 * @param {int} x
 * @return {Node}
 */

class Solution {
  deleteNode(head, x) {
    // code here
    if (head == null) {
      return head;
    }

    var dummy = new Node(0);
    dummy.next = head;

    var i = 1,
      temp2 = dummy,
      temp1 = null;
    while (temp2 != null && i <= x) {
      temp1 = temp2;
      temp2 = temp2.next;

      i += 1;
    }
    if (temp2 == null) {
      return head;
    }
    if (temp2.next != null) {
      if (temp2 == head) {
        temp2.next.prev = null;
      } else {
        temp2.next.prev = temp1;
      }
    }
    temp1.next = temp2.next;
    temp2 = null;
    return dummy.next;
  }
}
