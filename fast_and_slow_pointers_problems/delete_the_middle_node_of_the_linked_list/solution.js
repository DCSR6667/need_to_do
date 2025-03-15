/**
 * this problem can be solved by fast and slow pointers--O(n/2)
 * space complexity--O(1)
 *
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head == null || head.next == null) {
    return null;
  }
  var slow = head,
    fast = head.next;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = slow.next.next;
  return head;
};
