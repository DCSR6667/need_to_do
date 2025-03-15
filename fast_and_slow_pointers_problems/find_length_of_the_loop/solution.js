/**
 *
 * this problem can be solved by fast and slow pointers--O(n)
 * space--O(1)
 * @param {Node} head
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
  // Function to find the length of a loop in the linked list.
  countNodesinLoop(head) {
    // your code here
    var slow = head,
      fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        var count = 1;
        slow = slow.next;
        while (slow != fast) {
          count += 1;
          slow = slow.next;
        }
        return count;
      }
    }
    return 0;
  }
}
