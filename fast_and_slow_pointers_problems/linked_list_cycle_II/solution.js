/**
 * this problem can be solved by hash set--O(n)
 * space complexity---O(n)
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  var hs = new Set();
  var temp = head;
  while (temp != null) {
    if (hs.has(temp)) {
      return temp;
    }
    hs.add(temp);
    temp = temp.next;
  }
  return null;
};

/**
 * 
 * this problem can be solved by fast and slow pointers---O(n)
 * space complexity--O(1)
 * 
 *   
            slow=l1+l2
            fast=11+l2+ncycles
            2(slow)=fast
            2(l1+l2)=l1+l2+ncycles
            l1=ncycles-l2

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  var slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      var temp = head;
      while (temp != fast) {
        temp = temp.next;
        fast = fast.next;
      }
      return temp;
    }
  }
  return null;
};
