/**
 * time complexity---O(n+midpos)
 * space complexity--O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */

var length = (head) => {
  var temp = head;
  var count = 0;
  while (temp != null) {
    count += 1;
    temp = temp.next;
  }
  return count;
};
var middleNode = function (head) {
  var len = length(head);
  var mid_pos = Math.floor(len / 2);
  var i = 1,
    temp = head;
  while (i <= mid_pos) {
    temp = temp.next;
    i += 1;
  }
  return temp;
};

/**
 *
 * this problem can be solved by fast and slow pointers--O(n/2)
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
 * @return {ListNode}
 */
var middleNode = function (head) {
  var slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
