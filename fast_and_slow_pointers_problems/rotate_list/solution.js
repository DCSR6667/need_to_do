/**
 * this problem can be solved by fast and slow pointers--O(n+n)
 * space complexity--O(1)
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

var len = (last) => {
  var count = 0;
  while (last.next != null) {
    count += 1;
    last = last.next;
  }
  return [count + 1, last];
};
var rotateRight = function (head, k) {
  if (head == null || head.next == null) {
    return head;
  }
  var [count, last] = len(head);
  var dummy = new ListNode(0, head);
  k = k % count;
  if (k == 0) {
    return head;
  }

  i;
  var fast = head;
  var i = 1;
  while (i <= k) {
    fast = fast.next;
    i += 1;
  }
  var slow = head,
    temp;
  while (fast != null) {
    temp = slow;
    slow = slow.next;
    fast = fast.next;
  }
  dummy.next = slow;
  temp.next = null;
  last.next = head;

  return dummy.next;
};

/**
 * time complexity---O(n+(n-k))
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

var len = (last) => {
  var count = 0;
  while (last.next != null) {
    count += 1;
    last = last.next;
  }
  return [count + 1, last];
};
var rotateRight = function (head, k) {
  if (head == null || head.next == null) {
    return head;
  }
  var [count, last] = len(head);
  var k = k % count;
  if (k == 0) {
    return head;
  }
  var pos = count - k,
    i = 1;
  var dummy = new ListNode(0, head),
    temp = dummy;

  while (i <= pos) {
    temp = temp.next;
    i += 1;
  }
  dummy.next = temp.next;
  temp.next = null;
  last.next = head;
  return dummy.next;
};
