/**
 *
 * this problem can be solved by two pointers---O(n)
 * space complexity----O(1)
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function (head, x) {
  if (head == null) {
    return head;
  }
  var dummy_1 = new ListNode(-1),
    tail_1 = dummy_1;
  var dummy_2 = new ListNode(-1),
    tail_2 = dummy_2;
  var temp = head;
  while (temp != null) {
    if (temp.val < x) {
      tail_1.next = temp;
      tail_1 = temp;
      temp = temp.next;
    } else {
      tail_2.next = temp;
      tail_2 = temp;
      temp = temp.next;
    }
  }

  tail_1.next = dummy_2.next;
  tail_2.next = null;

  return dummy_1.next;
};
