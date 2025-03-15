/**
 * this problem can be solved by two pointers approach--O(max(m,n))
 * space complexity---O(max(m,n))
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var dummy = new ListNode(0);
  var tail = dummy;
  var temp1 = l1,
    temp2 = l2;
  var carry = 0,
    sum,
    val,
    n;
  while (temp1 != null && temp2 != null) {
    sum = temp1.val + temp2.val + carry;
    val = sum % 10;
    carry = Math.floor(sum / 10);
    n = new ListNode(val, null);
    tail.next = n;
    tail = tail.next;
    temp1 = temp1.next;
    temp2 = temp2.next;
  }
  while (temp1 != null) {
    sum = temp1.val + carry;
    val = sum % 10;
    carry = Math.floor(sum / 10);
    n = new ListNode(val, null);
    tail.next = n;
    tail = tail.next;
    temp1 = temp1.next;
  }

  while (temp2 != null) {
    sum = temp2.val + carry;
    val = sum % 10;
    carry = Math.floor(sum / 10);
    n = new ListNode(val, null);
    tail.next = n;
    tail = tail.next;
    temp2 = temp2.next;
  }
  if (carry != 0) {
    n = new ListNode(carry, null);
    tail.next = n;
    tail = tail.next;
  }
  return dummy.next;
};
