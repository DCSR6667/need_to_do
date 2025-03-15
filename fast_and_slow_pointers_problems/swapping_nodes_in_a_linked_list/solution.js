/**
 * this problem can be solved by fast and slow pointers--O(k+n-k)-->O(n)
 * space complexity--O(1)
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  var dummy = new ListNode(0, head);
  var fast = dummy,
    i = 1;
  while (i <= k) {
    fast = fast.next;
    i += 1;
  }
  var slow = dummy,
    temp = fast;
  while (fast != null) {
    slow = slow.next;
    fast = fast.next;
  }
  var save;
  save = temp.val;
  temp.val = slow.val;
  slow.val = save;
  return dummy.next;
};
