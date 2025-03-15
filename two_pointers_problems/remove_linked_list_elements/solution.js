/**
 * this problem can be solved by two pointers approach--O(n)
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var dummy = new ListNode(0, head),
    prev = dummy,
    curr = head;
  while (curr != null) {
    if (curr.val == val) {
      prev.next = curr.next;
      curr = curr.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return dummy.next;
};
