/*class DLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * this problem can be solved by inplace reversal of linked list---O(n)
 * space complexity ----O(1)
 * @param {DLLNode} head
 * @return {DLLNode}
 */

class Solution {
  reverseDLL(head) {
    // code here
    if (head == null || head.next == null) {
      return head;
    }

    var curr = head,
      prev = null,
      nex = curr.next;
    while (curr != null) {
      curr.next = prev;
      curr.prev = nex;
      prev = curr;
      curr = nex;
      if (nex != null) {
        nex = nex.next;
      }
    }
    return prev;
  }
}

/*class DLLNode {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}
*/

/**
 * this problem can be solved by swapping the prev and next links --O(n)
 * space complexity--O(1)
 * @param {DLLNode} head
 * @return {DLLNode}
 */

class Solution {
  reverseDLL(head) {
    // code here
    var curr = head,
      temp;
    while (curr != null) {
      temp = curr.next;
      curr.next = curr.prev;
      curr.prev = temp;
      if (curr.prev == null) {
        head = curr;
      }
      curr = curr.prev;
    }
    return head;
  }
}
