/**
 * this problem can be solved by inplace reversal
 * time complexity----O(right+(right-left+1))
 * space complexity----O(1)
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function (head, left, right) {
  if (head == null || head.next == null) {
    return head;
  }
  var dummy = new ListNode(0, head);
  var i = 1,
    temp1 = null,
    l = dummy;

  while (i <= left) {
    temp1 = l;
    l = l.next;
    i += 1;
  }
  var pos = right - left;
  var i = 1,
    r = l;
  while (i <= pos) {
    r = r.next;
    i += 1;
  }
  var temp2 = r.next;

  var curr = l,
    prev = null,
    nex = curr.next;
  while (curr != temp2) {
    curr.next = prev;
    prev = curr;
    curr = nex;
    if (nex != null) {
      nex = nex.next;
    }
  }

  temp1.next = prev;
  l.next = temp2;

  return dummy.next;
};

/**
 *
 * this problem can be solved by inplace reversal--O(right)
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (head == null || head.next == null) {
    return head;
  }
  var dummy = new ListNode(0, head);
  var i = 1,
    temp1 = null,
    l = dummy;

  while (i <= left) {
    temp1 = l;
    l = l.next;
    i += 1;
  }
  var pos = right - left + 1;
  var i = 1;
  var curr = l,
    prev = null,
    nex = curr.next;
  while (i <= pos) {
    curr.next = prev;
    prev = curr;
    curr = nex;
    if (nex != null) {
      nex = nex.next;
    }

    i += 1;
  }
  temp1.next = prev;
  l.next = curr;
  return dummy.next;
};
